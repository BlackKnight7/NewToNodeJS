var net = require('net');

var server = net.createServer(function (socket) {
    socket.on('data', function (data) {
        socket.write("\r\n" + data + "\r\n" + "HaHa"+"\r\n");
    })
})

server.listen(8888);