import { isMainThread, parentPort, workerData } from 'worker_threads'

console.log('Worker Data', workerData)
;(function () {
  console.log('WORKER: isMainThread, PID', isMainThread, process.pid)
  parentPort.on('message', function (msg) {
    console.log('Message received by worker', msg)
    if (msg === 'START') {
      setTimeout(() => {
        parentPort.postMessage('DONE')
      }, 1000)
    }
  })
})()
