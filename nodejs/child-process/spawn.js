import cp from 'child_process'

const p = cp.spawn('find', ['/'])

p.on('error', function (err) {
  console.log('Error', err)
})

p.stdout.on('data', function (data) {
  console.log(Buffer.from(data).toString())
})

p.stderr.on('data', () => {})
