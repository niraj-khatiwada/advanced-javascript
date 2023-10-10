import http from 'http'
import fs from 'fs'

const largeFile = fs.createReadStream(
  '/home/niraj/Documents/master-nodejs-streams/streams/big.file'
)

// Streaming files in Node.js
const server = http.createServer(function (req, res) {
  largeFile.on('data', function (chunk) {
    res.write(chunk)
  })

  return
})

server.listen(3000, function () {
  console.log('Server started')
})
