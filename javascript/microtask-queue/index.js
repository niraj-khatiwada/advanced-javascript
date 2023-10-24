// Web APIS -> Callback queue. Will always run after the micro-task queues.
setTimeout(() => {
  console.log('First')
}, 0)

setTimeout(() => {
  console.log('Second')
}, 1000)

// Microtask Queue. Runs first after the first tick. Just like process.nextTick in the Node.js
Promise.resolve().then(() => console.log('Third'))

// Main
console.log('Fourth')
