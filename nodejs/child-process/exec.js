import cp from 'child_process'

cp.exec('find /', function (error, stdout, stderr) {
  //   console.log('exec---', stdout)
})

cp.execFile('./child_process/script.sh', function (error, stdout, stderr) {
  console.log('execFile---', stdout)
})
