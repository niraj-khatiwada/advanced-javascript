import { Worker } from 'worker_threads'

const worker = new Worker('./worker-threads/processor.js', {
  workerData: { msg: 'Hello' },
})

worker.on('message', function (message) {
  console.log('Main', message)
})
