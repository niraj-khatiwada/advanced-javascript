import cp from 'child_process'

const main = cp.fork('./worker.js')

main.send('START')
main.on('message', function (msg) {
  if (msg === 'COMPLETE') {
    console.log('Completed')
    process.exit(0)
  }
})
