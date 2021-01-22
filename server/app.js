const express = require('express')
const app = express()
const server = require('http').createServer(app)
const io = require('socket.io')(server)
const port = 3000
const questions = require('./question.json')

let score = 0

io.on('connection', (socket) => {
  console.log('Socket.io client connected')
  socket.emit('questions', { questions } )
})

server.listen(port, () => console.log('Listening on port', port))