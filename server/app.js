const express = require('express')
const app = express()
const server = require('http').createServer(app)
const io = require('socket.io')(server)
const port = 3000
const questions = require('./question.json')

let score = 0
let results = []

io.on('connection', (socket) => {
  console.log('Socket.io client connected')
  socket.emit('questions', { questions } )

  socket.on('playersResult', function (payload) {
    results.push(payload)
    console.log(results);
  })
  
})

server.listen(port, () => console.log('Listening on port', port))