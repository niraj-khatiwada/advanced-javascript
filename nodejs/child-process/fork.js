import cp from 'child_process'

// Cluster module uses fork under the hood.(Not worker_threads though since worker threads will have same pid. ONly tasks are delegated to different threads in worker_threads, the pid is still same as main process.)
console.log('Main', process.pid)

const child = cp.fork('./child_process/processor.js')

child.send('Did you receive it?')

child.on('message', function (message) {
  console.log('Main process', message)
  if (message === 'COMPLETE') {
    process.exit(1)
  }
})
