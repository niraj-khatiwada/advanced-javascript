import { EventEmitter } from 'events'

const e = new EventEmitter()

const EVENT_NAME = 'HELLO'

e.addListener(EVENT_NAME, handler)
e.emit(EVENT_NAME, 'one', 'two')

// Global Events
process.on('SIGINT', () => {
  console.log('SIGINT', 'Gracefully shutting down.')
  process.exit(0)
})

process.on('exit', function () {
  console.log('Exiting Normally')
  e.removeListener(EVENT_NAME, handler)
})

function handler(...args) {
  console.log(args)
}

await sleep(3000)

async function sleep(time) {
  return new Promise((resolve) => setTimeout(resolve, time))
}
