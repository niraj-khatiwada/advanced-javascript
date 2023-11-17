console.log('First')

Promise.resolve('Third').then((val) => console.log(val))

process.nextTick(function () {
  console.log('Fourth')
})

setImmediate(() => {
  console.log('Fifth')
})

console.log('Second')

setTimeout(() => {
  console.log('Last')
}, 1000)
