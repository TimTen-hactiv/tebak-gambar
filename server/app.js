const express = require('express')
const app = express()
const server = require('http').createServer(app)
const io = require('socket.io')(server)
const port = process.env.PORT || 3001
const questions = require('./question.json')

let results = []

// let winner = (results, userName) => {
  
// }

io.on('connection', (socket) => {
  console.log('Socket.io client connected')
  io.emit('questions', { questions } )

  socket.on('playersResult', function (payload) {
    results = []
    results.push(payload)
    console.log(results);
    io.emit('winnerResult', results)
  })


  // socket.on('username', function (payload) {
  //   userName.push(payload)

  // })

  socket.on('start', () =>{
    io.emit('startAll')
  })
  
})

server.listen(port, () => console.log('Listening on port', port))