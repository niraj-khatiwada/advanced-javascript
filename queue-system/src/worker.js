import { EventEmitter } from 'events'

import Processor from './processor.js'

class Worker extends EventEmitter {}

const worker = new Worker()
const processor = new Processor()

worker.addListener('email', processor.sendEmail)

export default worker
