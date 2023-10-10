import http from 'http'

// Streaming files in Node.js
const server = http.createServer(function (req, res) {
  return res.end('<h1>Hello World</h1>')
})

server.listen(3000, function () {
  console.log('Server started')
})
