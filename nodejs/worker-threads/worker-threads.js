import { Worker } from 'worker_threads'

const processor = new Worker(
  '/home/niraj/Documents/master-nodejs-streams/worker-threads/processor.js'
)
