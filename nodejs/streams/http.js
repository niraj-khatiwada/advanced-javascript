import http from 'http'
import { Readable } from 'node:stream'

const readable = new Readable({
  read: function () {
    for (let i = 0; i < 100; i++) {
      this.push(`<h1>Hello World ${i}</h1>`)
    }
    this.push(null)
  },
})

const server = http.createServer(function (req, res) {
  readable
    .on('data', function (chunk) {
      res.write(chunk)
    })
    .on('close', function () {
      res.end()
    })
})

server.listen(9000, function () {
  console.log('Server started')
})
