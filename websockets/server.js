import http from 'http'

const server = http.createServer(function (req, res) {})

server.listen(3000, function () {
  console.log('Server started.')
})
