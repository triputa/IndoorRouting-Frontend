var app = require('http').createServer(handler),
	io = require('socket.io')(app),
	fs = require('fs'),
	port = 9838,
	devices = [];

app.listen(port);

function handler(req, res) {
	fs.readFile(__dirname + '/public/index.html',
		function(err, data) {
			if (err) {
				res.writeHead(500);
				return res.end('Error loading index.html');
			}

			res.writeHead(200);
			res.end(data);
		});
}

io.on('connection', function(socket) {
	socket.emit('devices', devices);

	socket.on('add-device', function(device) {
		devices.push({ 'address': device.address, 'name': device.name });
		socket.broadcast.emit('device-added', device); // send device to browsers
		console.log("Device Found: " + device.address + " which is named: " + device.name);
	});

	socket.on('get-devices', function(payload) {
		n
	});

});
