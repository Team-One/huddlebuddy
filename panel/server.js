#!/usr/bin/env node
/**
 * Copyright (c) 2013, Fabian Affolter <fabian@affolter-engineering.ch>
 * Released under the MIT license. See LICENSE file for details.
 */

var socket = require('socket.io');
var mqtt = require('mqtt');
var databaseUrl = "huddlebuddy";
var collections = ["checkins","rooms","logs"];
var db = require("mongojs").connect(databaseUrl, collections);
var io = socket.listen(3000);
var mqttbroker = 'localhost';
var mqttport = 1883;
//var mqttbroker = 'localhost';
//var mqttport = '1883';
var mqttclient = mqtt.createClient(mqttport, mqttbroker);
mqttclient.subscribe("rooms/#");
// Reduce socket.io debug output
io.set('log level', 0)

// Application loop to check for vacant rooms
function app_loop(){
   setTimeout(function(){
        var time = Math.round(Date.now()/1000);
        db.rooms.find({flag:{$ne:0}}, function(err,result) {
            result.forEach(function(err,room){
                if(time - result[room].time > 600 && result[room].flag > 0) {
                    updateRoom(result[room].room, 0);
                } else if(time - result[room].time > 300 && result[room].flag == 2) {
                    updateRoom(result[room].room, 1);
                }
            });
        });
        app_loop();
   }, 60000);
}
app_loop();

function updateRoom(room, flag) {
    if(flag == 0) {
        // Wipe the checkins
        db.checkins.remove({room: room});
    }
    var time = Math.round(Date.now()/1000);
    db.rooms.findOne({room: room}, function(err,result) {
        if(result.flag != flag) {
            db.logs.insert({type:"room_update",room: room, flag: flag, time: time});
        }
        if(flag == 2) 
            db.rooms.update({room: room}, {$set:{flag:flag, time: time}}, {upsert:true});
        else
            db.rooms.update({room: room}, {$set:{flag:flag}}, {upsert:true});
        io.sockets.emit('mqtt',
            {'topic'  : room,
             'flag' : flag
            }
        );
    })
}

// Subscribe to topic
io.sockets.on('connection', function (socket) {
    socket.on('subscribe', function (data) {
        mqttclient.subscribe(data.topic);
    });
    socket.on('checkIn', function (data) {
        db.checkins.insert({room:data.room,user:data.user, time: time});
        var time = Math.round(Date.now()/1000);
        db.logs.insert({type:"check_in", room: data.room, user: data.user, time: time});
        socket.broadcast.emit('checkin',
            {'room'  : data.room,
             'user' : data.user
            }
        );
        mqttclient.publish('rooms/'+data.room, 'true');
    });
    socket.on('requestLogs', function (data) {
        var pastDay = Math.round(Date.now()/1000)-86400;
        db.logs.find({time : {$gt:pastDay}}, function(err,result) {
            socket.emit('logs',
                result
            );
        });
    });
    db.rooms.find({},function (err,result) {
        result.forEach(function(err,room){
            io.sockets.socket(socket.id).emit('mqtt',
                {'topic'  : result[room].room,
                 'flag' : result[room].flag
                }
            );
        });
    })
    db.checkins.find({},function (err,result) {
        result.forEach(function(err,checkin){
            io.sockets.socket(socket.id).emit('checkin',
                {'room'  : result[checkin].room,
                 'user' : result[checkin].user
                }
            );
        });
    })
});

// Push the message to socket.io
mqttclient.on('message', function(topic, payload) {
    var room = topic.split("/")[1];
    if(payload == "false") {
        // This is just kept for testing
        var flag = 0;
    } else {
        var flag = 2;
    }
    updateRoom(room, flag);
});