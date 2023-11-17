import cp from 'child_process'

const main = cp.fork('./worker.js')

console.log(process.pid)

main.send('START')
main.on('message', function (msg) {
  if (msg === 'COMPLETE') {
    console.log('Completed')
    process.exit(0)
  }
})
