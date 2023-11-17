import { Worker, isMainThread } from 'worker_threads'

const processor = new Worker('./processor.js', { workerData: { id: 1 } })

console.log('MAIN: isMainThread, PID', isMainThread, process.pid)

processor.postMessage('START')

processor.on('message', function (msg) {
  console.log('Message received by main thread', msg)
})
