import fs from 'fs'
import { Readable, Transform } from 'node:stream'

const readable = new Readable({
  read: function () {
    for (let i = 0; i < 1e6; i++) {
      this.push(i.toString())
    }
    this.push(null)
  },
})

const transform = new Transform({
  transform: function (chunk, encoding, cb) {
    console.log('Encoding', encoding)
    cb(null, chunk.toString() + 'Niraj')
  },
})

// const writable = new Writable({
//   write: function (chunk, _, cb) {
//     console.log(chunk)
//     cb(null, chunk)
//   },
// })

readable
  .pipe(transform)
  // .pipe(process.stdout) // CLI
  .pipe(fs.createWriteStream('./test.txt')) // File
  //   .on('data', function (chunk) {
  //     console.log('--', chunk)
  //   })
  .on('close', function () {
    console.log('complete')
  })
