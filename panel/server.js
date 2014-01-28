#!/usr/bin/env node
/**
 * Copyright (c) 2013, Fabian Affolter <fabian@affolter-engineering.ch>
 * Released under the MIT license. See LICENSE file for details.
 */

var socket = require('socket.io');
var mqtt = require('mqtt');
var databaseUrl = "huddlebuddy";
var collections = ["checkins","rooms"];
var db = require("mongojs").connect(databaseUrl, collections);
var io = socket.listen(3000);
var mqttbroker = 'localhost';
var mqttport = 1883;
//var mqttbroker = 'localhost';
//var mqttport = '1883';
var mqttclient = mqtt.createClient(mqttport, mqttbroker);

// Reduce socket.io debug output
io.set('log level', 1)

// Subscribe to topic
io.sockets.on('connection', function (socket) {
    socket.on('subscribe', function (data) {
        mqttclient.subscribe(data.topic);
    });
    socket.on('checkIn', function (data) {
        db.checkins.save({room:data.room,user:data.user});
    });
    
    db.rooms.find({},function (err,result) {
    	result.forEach(function(err,room){
    		io.sockets.emit('mqtt',
		        {'topic'  : result[room].room,
		         'payload' : result[room].status
		        }
		    );
    	});
    })
    db.checkins.find({},function (err,result) {
    	result.forEach(function(err,checkin){
    		io.sockets.emit('checkin',
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
	if(payload == false) {
		// Wipe the room
		db.checkins.remove({room: room});
	}
	db.rooms.update({room: room}, {$set:{status:payload}}, {upsert:true});
    io.sockets.emit('mqtt',
        {'topic'  : room,
         'payload' : payload
        }
    );
});