import cp from 'child_process'
import { Buffer } from 'buffer'

// spawn uses streams instead of a final string output that we saw in exec.

const script = cp.spawn('find', ['/'])

// Returns chunk as Buffer
script.stdout.on('data', function (chunk) {
  console.log(Buffer.from(chunk).toString())
})

script.stderr.on('data', function (chunk) {
  // This chunk is a buffer
  console.log('StdError', Buffer.from(chunk).toString())
})

script.on('error', function (error) {
  console.log('Error', error)
})

script.on('exit', function (code, signal) {
  console.log('Exited', code, signal)
})
