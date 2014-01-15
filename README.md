huddlebuddy
===========

Huddle Room state detection in real-time, Powered by MQTT, Node, & Socket.io


Install Mosca npm install mosca [Mcollina/mosca](https://github.com/mcollina/mosca)
and get it up and running with ```mosca -v | bunyan```

Now you have a MQTT Broker running that you can publish or subscribe to various topics by using simple url style endpoints i.e. publish to the topic teamone/huddlerooms/huddle1/moving/ with the message via a MQTT Client.
The other end of a MQTT Client is the Subscribe function.
A web browser can subscribe to a topic using websocket to communicate. In our setup we'll be using Socket.io to make this easier. Our node.js server is running localhost socket for web clients to connect to. In our /panel/index.html file we connect to our socket.io connection here: ```javascript var socket = io.connect('http://localhost:3000');  socket.on('connect', function () {};```
and here's our MQTT topic subscription: ```javascript socket.emit('subscribe', {topic : 'home/#'});```

Mqtt Panel Dependencies:
* node.js
* mqtt
* socket.io


![Diagram of MQTT setup](http://o7.no/1j7Yt61)
