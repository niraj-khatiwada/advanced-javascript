// Callback queue
setTimeout(() => {
  console.log('Fifth')
}, 1000)

setImmediate(() => {
  console.log('Fourth')
})

// These 2 are called microtask queue
Promise.resolve('Second').then((val) => console.log(val))

process.nextTick(function () {
  console.log('Third')
})

console.log('First')
