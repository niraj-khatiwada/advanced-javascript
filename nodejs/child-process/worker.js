process.on('message', function (msg) {
  console.log(msg)
  if (msg === 'START') {
    for (let i = 0; i < 1e5; i++) {}
  }
  process.send('COMPLETE')
})
