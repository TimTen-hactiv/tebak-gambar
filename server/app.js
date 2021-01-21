const express = require('express')
const app = express()
const server = require('http').createServer(app)
const io = require('socket.io')(server)
const port = 3000

io.on('connection', (socket) => {
  console.log('Socket.io client connected')
  // socket.emit()
})

server.listen(port, () => console.log('Listenin on port', port))