const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

io.on('connection',socket => {
    console.log('made socket connection',socket.id)

    socket.on('chat',data => {
        io.emit('chat',data)
    })

});

server.listen(2020,() => {
    console.log('listening on *:2020');
});