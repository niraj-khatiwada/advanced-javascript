process.on('message', function (message) {
  console.log('Message received. Starting heavy task.', message)
  let count = 0
  for (let i = 0; i < 1e10; i++) {
    count += i
  }
  process.send(count)
})
