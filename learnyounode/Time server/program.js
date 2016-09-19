var port = process.argv[2];
var net = require('net');
var strftime = require('strftime');

var server = net.createServer(function(socket) {
    var time = new Date();
    socket.end(strftime('%F %R\n', time));
});

server.listen(port);