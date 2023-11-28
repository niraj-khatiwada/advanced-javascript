import { parentPort, isMainThread, workerData } from 'worker_threads'

if (!isMainThread) {
  console.log('Worker data', workerData)
  parentPort.postMessage('COMPLETE')
}
