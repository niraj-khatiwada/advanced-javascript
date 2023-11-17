import http from 'http'
import { Readable, Transform } from 'stream'
import fs from 'fs'

import { Users } from './class/index'

// Generate chunks on fly
const readable = new Readable({
  read: function () {
    for (let i = 0; i < 100_000; i++) {
      this.push(Buffer.from(i.toString()))
    }
    this.push(null)
  },
})

// Preexisting chunks
const readableFile = fs.createReadStream('./big.file', 'utf-8')

const server = http.createServer(function (req, res) {
  const url = new URL(`http://localhost:3000${req.url}`)

  switch (url.pathname) {
    case '/login': {
      if (req.method == 'GET') {
        return res.end('<h1>Login</h1>')
      }
    }
    case '/download': {
      if (req.method == 'GET') {
        res.setHeader('Content-Length', 2 * 1e9)
        res.setHeader('Content-Disposition', 'attachment; filename="abc.txt";')
        readable
          .on('data', function (chunk) {
            res.write(chunk, 'utf-8')
          })
          .on('end', function () {
            console.log('Download completed.')
            res.end('Download completed.')
          })
        return
      }
    }
    case '/file-size': {
      let size = 0
      if (req.method == 'GET') {
        readableFile
          .on('data', function (chunk) {
            size += chunk.length
          })
          .on('end', function () {
            res.end(`${size / 1e9}`)
          })
        return
      }
    }
    case '/file-download': {
      if (req.method == 'GET') {
        res.setHeader('Content-Length', 2 * 1e9)
        res.setHeader('Content-Disposition', 'attachment; filename="abc.txt";')
        readableFile
          .on('data', function (chunk) {
            res.write(chunk, 'utf-8')
          })
          .on('end', function () {
            console.log('Download completed.')
            res.end('Download completed.')
          })
        return
      }
    }
    default:
  }
  readable
    .on('data', function (chunk) {
      res.write(chunk)
    })
    .on('end', function () {
      console.log('Stream completed.')
      res.end()
    })
})

server.listen(3000, function () {
  console.log('Server started at port 3000')
})
