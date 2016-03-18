var mqtt = require('mqtt')
var mqttbroker = 'localhost';
var mqttport = 1883;
var client = mqtt.createClient(mqttport, mqttbroker);
client.subscribe('huddle1/');
client.publish('huddle1/', 'true');

client.on('message', function (topic, message) {
  console.log(message);
});

client.end();