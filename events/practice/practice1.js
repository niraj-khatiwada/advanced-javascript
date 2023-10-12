import { EventEmitter } from 'events'

class CustomEventEmitter extends EventEmitter {}

const cee = new CustomEventEmitter()

cee.on('start', function (...args) {
  console.log('Task started', args)
})

cee.emit('start', ...[1, 2])
