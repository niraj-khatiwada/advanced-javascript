import http from 'http'
import { randomUUID } from 'crypto'

const server = http.createServer(function (req, res) {
  return res.end(randomUUID())
})

server.listen(3000, function () {
  console.log('Server is running.')
})
