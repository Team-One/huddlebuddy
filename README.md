huddlebuddy
===========

Huddle Room state detection in real-time, Powered by MQTT, Node, & Socket.io


Install Mosca [Mcollina/mosca](https://github.com/mcollina/mosca) (a Node.js MQTT Broker):
``` npm install mosca``` 

and get it up and running with:
``` mosca -v | bunyan```

Now you have a MQTT Broker running that you can publish or subscribe to various topics by using simple url style endpoints i.e. publish to the topic teamone/huddlerooms/huddle1/moving/ with the message via a MQTT Client.
or a web browser can subscribe to a topic using websocket to communicate. 

In our setup we'll be using Socket.io to make this easier. 
Our node.js server is running localhost socket for web clients to connect to. In our /panel/index.html  we connect to our socket.io connection here: ``` var socket = io.connect('http://localhost:3000');  socket.on('connect', function () {};```

and here's our MQTT topic subscription: ``` socket.emit('subscribe', {topic : 'home/#'});```

Next we'll install the Node.js based web browser client to subscribe and display the state of the Huddlerooms.

https://github.com/fabaff/mqtt-panel

Mqtt Panel Dependencies:
* node.js
* mqtt
* socket.io



![Diagram of MQTT setup](http://o7.no/1j7Yt61)