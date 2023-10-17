import http from 'http'

const server = http.createServer(function (req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, OPTIONS'
  )
  res.setHeader('Access-Control-Allow-Credential', true)
  if (req.url === '/sse') {
    // To enable SSE, we need to first set `Content-Type: text/event-stream`
    res.setHeader('Content-Type', 'text/event-stream')
    // The data needs to start with `data: ` and end with `\n\n`. This is the standard of SSE.

    // Do not do end the request like this. Otherwise, client will keep retrying when the connection is lost every few seconds.
    // return res.write('data: ' + 'Is this streaming.' + '\n\n', function () {
    //   return res.end('Streamed')
    // })
    return setInterval(() => {
      res.write('data: ' + `Score. ${+new Date()}` + '\n\n')
    }, 1000)
    // No res.end() for SSE because we don't want to end it, we want to stream it.
  }
  return res.end('Home')
})

server.listen(3000, function () {
  console.log('Server is running.')
})
