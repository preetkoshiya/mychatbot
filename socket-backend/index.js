// Node Server
const io = require('socket.io')(8000)
const resObject = require('./response');

const userdict = {};

const getChatResponse = (message) =>{
    return resObject(message);
}

io.on('connection', socket =>{
    socket.on('user-joined', uname =>{
        userdict[socket.id] = uname;
        socket.emit('greetings', uname);
    });

    socket.on('send', message =>{
        let reply = getChatResponse(message.toLowerCase());
        socket.emit('receive', {message: reply, name: "Bot"});
    })
});