const express = require('express')
const app = express()
const server = require('http').createServer(app)
const io = require('socket.io')(server)
const port = 3000

let data = [
  {
    id: 1,
    cropped_image: 'https://i.imgur.com/UccmCQC.jpg',
    real_image: 'https://i.imgur.com/LWtkdu1.jpg?1',
    jokes: 'Wah keren banget ya kudanya xixi',
    answer: 'kuda'
  },
  {
    id: 2,
    cropped_image: 'https://i.imgur.com/kbzIVti.jpg',
    real_image: 'https://i.imgur.com/w9YeMBf.jpg',
    jokes: 'Pandai-pandai dia melompat pasti jatuh cinta :rofl:',
    answer: 'tupai'
  },
  {
    id: 3,
    cropped_image: 'https://i.imgur.com/GGWnKCq.jpg',
    real_image: 'https://i.imgur.com/ztnFUNz.jpg',
    jokes: 'Akhirnya bisa lihat evolusi hewan..',
    answer: 'gajah'
  },
  {
    id: 4,
    cropped_image: 'https://i.imgur.com/5f7QfsG.jpg',
    real_image: 'https://i.imgur.com/FhGToW7.jpg',
    jokes: 'Bisa info itu kepala apa ya(?)',
    answer: 'bebek'
  },
  {
    id: 5,
    cropped_image: 'https://i.imgur.com/HoTqLIl.jpg',
    real_image: 'https://i.imgur.com/ZT87npV.jpg',
    jokes: 'Hampir bener sih, tapii..',
    answer: 'ikan'
  },
  {
    id: 6,
    cropped_image: 'https://i.imgur.com/hRTG9RM.jpg',
    real_image: 'https://i.imgur.com/9SGYUZw.jpg',
    jokes: ':rofl:',
    answer: 'panda'
  },
  {
    id: 7,
    cropped_image: 'https://i.imgur.com/Gzq5Zyq.jpg',
    real_image: 'https://i.imgur.com/xSodQWS.jpg',
    jokes: 'Pandai merayu dan gonta-ganti',
    answer: 'kodok'
  },
  {
    id: 8,
    cropped_image: 'https://i.imgur.com/E1GBCKL.jpg',
    real_image: 'https://i.imgur.com/tCx6gh0.jpg',
    jokes: 'Sang penjaga sultan haikal',
    answer: 'anjing'
  },
  {
    id: 9,
    cropped_image: 'https://i.imgur.com/2EsetMp.jpg',
    real_image: 'https://i.imgur.com/yAG4SAo.jpg',
    jokes: 'Mimik developer baru bangun',
    answer: 'burung'
  },
  {
    id: 10,
    cropped_image: 'https://i.imgur.com/sorxhSI.jpg',
    real_image: 'https://i.imgur.com/11JmvNK.jpg',
    jokes: ':heart_eyes: hampirrrr aja',
    answer: 'singa'
  }
]

let score = 0

io.on('connection', (socket) => {
  console.log('Socket.io client connected')
  socket.emit('questions', { data })
})

server.listen(port, () => console.log('Listening on port', port))