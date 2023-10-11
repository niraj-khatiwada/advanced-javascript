import { parentPort, isMainThread, workerData } from 'worker_threads'

function processor() {
  console.log('Processor', workerData)
  setTimeout(() => {
    console.log('Email sent')
    console.log('processor-isMainThread', isMainThread)
    parentPort.postMessage('Email sent')
  }, 3000)
}

processor()
