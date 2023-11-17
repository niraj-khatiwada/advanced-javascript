import cp from 'child_process'

const command = cp.spawn('find', ['/'])

command.on('error', function (err) {
  console.log('Error', err)
})

command.stderr.on('data', function (err) {
  console.log('Std Error', err)
})

command.stdout.on('data', function (chunk) {
  console.log(Buffer.from(chunk).toString())
})

command.on('exit', function () {
  console.log('Exited')
})
