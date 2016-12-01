var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

io.on('connection', function(socket){
    console.log('socket connected');
    socket.on('chat message', function(msg){
        io.emit('chat message', msg);
    });
    socket.emit('test', 'hello');
});

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


http.listen(4000, function(){
  console.log('listening on *:4000');
});