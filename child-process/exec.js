import cp from 'child_process'

// Reference Video: https://www.youtube.com/watch?v=bbmFvCbVDqo

// Exec is only useful for running simple commands
// The stdout is a final buffer converted to a string

// cp.exec('pwd', function (error, stdout, stderror) {
//   if (error) {
//     console.log('Error--->', error)
//     return
//   }
//   console.log(stdout, stderror)
// })

// Max Buffer length exceeded
// cp.exec('find /', function (error, stdout, stderror) {
//   if (error) {
//     console.log('Error--->', error)
//     return
//   }
//   console.log(stdout, stderror)
// })

// Runs the executable files.
// chmod +x ./script.sh
cp.execFile('./script.sh', function (error, stdout, stderror) {
  if (error) {
    console.log('Error--->', error)
    return
  }
  console.log(stdout, stderror)
})
