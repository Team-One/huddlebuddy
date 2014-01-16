var mosca = require('mosca')


var settings = {
  port: 1883
};

var server = new mosca.Server(settings);
server.on('ready', setup);

// fired when the mqtt server is ready
function setup() {
  console.log('Mosca server is up and running')
}

// fired when a message is published
server.on('published', function(packet, client) {
  console.log('Published', packet.payload);
});