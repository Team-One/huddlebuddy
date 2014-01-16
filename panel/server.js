#!/usr/bin/env node
/**
 * Copyright (c) 2013, Fabian Affolter <fabian@affolter-engineering.ch>
 * Released under the MIT license. See LICENSE file for details.
 */

var socket = require('socket.io');
var mqtt = require('mqtt');
var io = socket.listen(3000);
//var mqttbroker = 'ltzxvptq:6ytMC_9DKgfO@m10.cloudmqtt.com';
//var mqttport = 22009;
var mqttbroker = 'localhost';
var mqttport = '1883';
var mqttclient = mqtt.createClient(mqttport, mqttbroker);

// Reduce socket.io debug output
io.set('log level', 0)

// Subscribe to topic
io.sockets.on('connection', function (socket) {
    socket.on('subscribe', function (data) {
        mqttclient.subscribe(data.topic);
    });
});

// Push the message to socket.io
mqttclient.on('message', function(topic, payload) {
    io.sockets.emit('mqtt',
        {'topic'  : topic,
         'payload' : payload
        }
    );
});