const ws = require('ws');

const wss = new ws.Server({
    port: 5000,
}, () => console.log(`Server started on 5000`))

wss.on('connection', function connection(ws) {
    ws.on('message', function (message) {
        console.log(message)
        message = JSON.parse(message)
        switch (message.event) {
            case 'message':
                console.log(message)
                broadcastMessage(message)
                break;
            case 'connection':
                console.log(message)
                broadcastMessage(message)
                break;
        }
    })
    ws.on('close', function close(message) {
        message = JSON.parse(message)
        broadcastMessage(`Пользователь ${message} отключился`);
    });
})

function broadcastMessage(message, id) {
    wss.clients.forEach(client => {
        client.send(JSON.stringify(message))
    })
}
