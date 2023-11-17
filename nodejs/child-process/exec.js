import cp from 'child_process'

// exec
// spawn
// fork -> new process

cp.exec('find /', function (error, stdout, stderr) {
  if (!(error == null)) {
    console.log('Error', error)
    return
  }

  if (stderr.length > 0) {
    console.log('std error', error)
    return
  }

  console.log(stdout)
})
