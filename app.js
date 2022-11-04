var express = require('express');
var app = express();
var io = require('socket.io')(app.listen(8081));
var five = require('johnny-five');

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

var board = new five.Board({
  repl: false
});

board.on('ready', function () {

  var led = new five.Led(13);

  io.on('connection', function (socket) {

    socket.on('LedOn1', function () {
      console.log('Led 1 Encendida');
      led.on();
    });

    socket.on('LedOn2', function () {
      console.log('Led 2 Encendida');
      led.on();
    });

    socket.on('LedOn3', function () {
      console.log('Led 3 Encendida');
      led.on();
    });

    socket.on('LedOff1', function () {
      console.log('Led 1 Apagada');
      led.off();
    });

    socket.on('LedOff2', function () {
      console.log('Led 2 Apagada');
      led.off();
    });

    socket.on('LedOff3', function () {
      console.log('Led 3 Apagada');
      led.off();
    });
  });

});
