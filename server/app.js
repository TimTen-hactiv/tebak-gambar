const express = require('express')
const app = express()
const server = require('http').createServer(app)
const io = require('socket.io')(server)
const port = 3000
const question = require('./data.json')


io.on('connection', (socket) => {
  console.log('Socket.io client connected')
  socket.emit('question', question)
})

server.listen(port, () => console.log('Listenin on port', port))