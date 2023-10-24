// Web APIS -> Callback queue. Will always run after the micro-task queues.
setTimeout(() => {
  console.log('First')
}, 0)

setTimeout(() => {
  console.log('Second')
}, 1000)

// Microtask Queue.
process.nextTick(function () {
  console.log('Third')
})

// Promise is also a microtask queue. But it runs first after the first tick before the process.nextTick. Just like process.nextTick in the Node.js.
// But for some users, the process.nextTick runs before the Promise.resolve(). They say Promise.resolve() has higher priority than process.nextTick()
Promise.resolve().then(() => console.log('Fourth'))

// Main
console.log('Fifth')

/** Order is
 * Main
 * Microtask Queue
 * .nextTick
 * Event Queue/Callback Queue
 */
