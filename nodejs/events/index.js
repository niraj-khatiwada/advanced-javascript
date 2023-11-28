import { EventEmitter } from 'events'

class CustomEmitter extends EventEmitter {}

const event = new CustomEmitter()

function listener(...args) {
  console.log('Charging', args)
}

event.addListener('ACTION', listener)

event.emit('ACTION', { task: 1 })

event.removeListener('ACTION', listener)
