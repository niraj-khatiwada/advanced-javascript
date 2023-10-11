import cluster from 'cluster'
import http from 'http'
// import os from 'os'

// console.log(os.cpus().length)

// cluster.fork is implemented on top of child_process.fork. See /child-process/fork for it's example.

if (cluster.isPrimary) {
  console.log('Master process', process.pid)
  cluster.fork()
  cluster.fork()
} else {
  console.log('Worker process', process.pid)
  const server = http.createServer(function (req, res) {
    if (req.url === '/') {
      return res.end('<h1>Home</h1>')
    } else if (req.url === '/long-task') {
      let count = 0
      for (let i = 0; i < 5e10; i++) {
        count += i
      }
      return res.end('<h1>Task finished</h1>')
    }
    return res.end('<h1>Page not found </h1>')
  })

  server.listen(3000, function () {
    console.log('Server started.')
  })
}
