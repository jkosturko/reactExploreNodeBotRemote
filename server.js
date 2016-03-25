
'use strict';

var app = require('express')();
var express = require('express');
var server = require('http').createServer(app);
var io = require('socket.io')(server);
// var five = require("johnny-five");
// var board = new five.Board();	

var startRobot = function (board,data) {
	board.on("ready", function() {
	console.log('startRobot', data);

	  // Johnny-Five provides pre-packages shield configurations!
	  // http://johnny-five.io/api/motor/#pre-packaged-shield-configs
	  var motors = new five.Motors([
	    five.Motor.SHIELD_CONFIGS.POLOLU_DRV8835_SHIELD.M1,
	    five.Motor.SHIELD_CONFIGS.POLOLU_DRV8835_SHIELD.M2,
	  ]);

	  // var motor = new five.Motor([3, 12]);

	  this.repl.inject({
	    motors: motors
	  });

	  motors.speed(255);
	});
};	

io.on('connection', function (socket) {
  socket.on('command sent', function (data) {
  	console.log('board', board);
  	startRobot(board,data);
  });
});

app.use(express.static('public'));
server.listen(3000);
