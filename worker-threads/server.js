import http from 'http'
import { Worker, isMainThread } from 'worker_threads'

const server = http.createServer(function (req, res) {
  if (req.url === '/') {
    const worker = new Worker(
      '/home/niraj/Documents/master-nodejs-streams/worker-threads/processor.js',
      { workerData: { abc: 'def' } }
    )
    console.log('server-isMainThread', isMainThread)
    worker.on('message', function (message) {
      console.log('----SUCCESS---', message)
    })
    worker.on('error', function (error) {
      console.error('---Error---', error)
    })
    return res.end('<h1>Thank you for registering</h1>')
  }
  return res.end('<h1>Page not found.</h1>')
})

server.listen(3000, function () {
  console.log('Server is running.')
})
