import cluster from 'cluster'
import os from 'os'
import http from 'http'

console.log('Main Thread', process.pid)

const CPU_LENGTH = os.cpus().length

if (cluster.isPrimary) {
  for (let i = 0; i < CPU_LENGTH; i++) {
    console.log('Forking CPU', i + 1)
    cluster.fork()
  }
} else {
  const server = http.createServer()
  server.listen(3000, function () {
    console.log('Server started')
  })
}
