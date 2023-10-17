// Every time the event loop takes a full trip, we call it a tick.
// nextTick will run on another iteration/tick of event loop first before the event queue callbacks
// That's why "Hello World" executes first here and then "Last" executes.

console.log('Started')
setImmediate(function () {
  console.log('Last')
})
process.nextTick(function () {
  console.log('Hello World')
})
console.log('End')
