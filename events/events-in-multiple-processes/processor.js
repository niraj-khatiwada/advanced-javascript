import { EventEmitter } from 'events'

export const ee = new EventEmitter()

console.log('Child 1 PID:', process.pid)
process.on('message', function (message) {
  console.log('Message from master:', message)
  ee.emit('child_1')
  process.send('Task completed')
})
