import http from 'http'
import { Buffer } from 'buffer'

import Queue from './src/queue.js'

const queue = new Queue()

const server = http.createServer(function (req, res) {
  if (req.method === 'GET' && req.url === '/register') {
    const number = Math.ceil(Math.random() * 10)
    console.log(number)
    queue.addSendEmailQueue(number)
    res.statusCode = 200
    // return res.end(Buffer.from('Is this really working.', 'utf-8'))
    return res.end('Thank you for registering')
  }

  res.statusCode = 200
  return res.end('Home')
})

server.listen(3000, function () {
  console.log('Server started')
})
