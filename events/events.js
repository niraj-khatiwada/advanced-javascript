/*
    Much of the Node.js core API is built around an idiomatic asynchronous event-driven architecture in which certain kinds of objects (called "emitters") emit named 
    events that cause Function objects ("listeners") to be called.
    For eg: a `fs.ReadStream` emits an event when the file is opened

    Events API in the browser is different to events API in the Node.js. In browser most of the events are from DOM but in Node.js, most of the events are associated with OS.
*/

import { EventEmitter } from 'events'

class CustomEmitter extends EventEmitter {}

const customEmitter = new CustomEmitter()

customEmitter.addListener('work', function (a) {
  console.log('Boss is calling.', a)
})

customEmitter.emit('work', 'Niraj')
