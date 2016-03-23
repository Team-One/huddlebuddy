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


INSTRUCTIONS:

1. Burn a image onto the beaglebone using flash instructions (insert link)

2. Set a new IP address to static one provided

----------

3. cd  /usr/lib/connman/test

4. Setting IP, Subnet, Router IP- ./set-ipv4-method ethernet_c8a030b7e29c_cacble manual 10.13.196.243 255.255.255.0 10.13.196.1

5. Check to see if internet is up. If not "reboot" in Terminal

6. Run "Supervisord" in Terminal

7. Run "Supervisorctl status" in Terminal



North West- Chad Bouer
IP: 10.13.196.242
Subnet: 255.255.255.0
Router IP:

South Side- Ben Fong
IP: 10.13.200.243
Subnet: 255.255.255.0
Router: 10.13.200.1

North East- Lauren
IP:     10.13.198.116
Subnet: 255.255.255.0
Router: 10.13.198.1


Updating PyBBIO

I am working as fast as I can to add support for many of the features that the BeableBone's AM335x processor has to offer, so you'll want to make sure your version is up to date.

To make sure you have the latest stable release:

# pip install --upgrade PyBBIO
