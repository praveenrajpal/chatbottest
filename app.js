var express = require('express'),
	app=express(),
	server=require('http').createServer(app),
	io=require('socket.io').listen(server);
	
	names =[];
	mobiles =[];
	
server.listen(3000);

app.get('/',function(req,res){
	res.sendFile(__dirname + '/index.html');
});

io.sockets.on('connection',function(socket){
	
	function updatenames(){
		io.sockets.emit('usernames', names);
	}
	socket.on('send message' ,function(data){
		io.sockets.emit('new message', {msg:data , name:socket.name});
		});
		
	socket.on('user name' ,function(data){
		names.push(data);
		socket.name = data;
		console.log(names);
		updatenames();
		});
	
	socket.on('user mobile' ,function(data,callback){
		if (mobiles.indexOf(data) != -1) {
			callback(false);
		} else {
			callback(true);
			socket.mobile = data;
			mobiles.push(data);
		}
		});
	socket.on('disconnect',function(data){
		if(!socket.name) return;
		names.splice(names.indexOf(socket.name),1);
		updatenames();
	});
	
});