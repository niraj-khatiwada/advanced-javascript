import cp from 'child_process'

console.log('Master PID: ', process.pid)
const child = cp.fork('./processor.js', { detached: true })
child.send('Start the work child 1')
const child2 = cp.fork('./processor2.js', { detached: true })
child2.send('Start the work child 2')
child.on('message', (message) => {
  console.log(message)
})

// Events does not work in multiple processes.
// Console Logs
/*
  Master PID:  45561
  Child 1 PID: 45572
  Message from master: Start the work child 1
  Task completed
  Child 1 PID: 45573 ->
  Child 2 PID 45573 -> Right now this and above `Child 1 PID: 45573` are same processes. That means the event `ee.emit('child_1')` emitted from `process1.js` was not received when the `Child 1 PID: 45572` was running. The emitted event was triggered when the child processes were same later.
`
  Message from master: Start the work child 2
  Child 2 undefined
  Message from master: Start the work child 2
*/
