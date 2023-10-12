import { EventEmitter } from 'events'

class CustomEmitter extends EventEmitter {}

export const customEmitter = new CustomEmitter()

customEmitter.addListener('work', function (a) {
  console.log('Boss is calling.', a)
})
