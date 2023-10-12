import { EventEmitter } from 'events'

import { ee } from './processor.js'

ee.on('child_1', (message) => {
  console.log('Child 2', message)
})

console.log('Child 2 PID', process.pid)
process.on('message', function (message) {
  console.log('Message from master:', message)
  process.send('Task completed')
})
