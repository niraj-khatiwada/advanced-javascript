console.log('Child process', process.pid) // pid will be different

process.on('message', function (message) {
  console.log('Yes I received it', message)
  process.send('COMPLETE')
})
