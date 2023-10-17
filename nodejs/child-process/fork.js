import cp from 'child_process'
import http from 'http'

// cluster.fork is implemented on top of child_process.fork.

const server = http.createServer(function (req, res) {
  if (req.url === '/heavy-task') {
    const child = cp.fork('./heavy-task.js')
    child.send('Start')
    child.on('message', function (message) {
      console.log('--Success--', message)
    })
    return res.end('Task finished')
  }

  return res.end('Home')
})

server.listen(3000, function () {
  console.log('Server started')
})
