import { Readable, Transform } from 'stream'
import fs from 'fs'

const readable = new Readable({
  read() {
    for (let i = 0; i < 1e6; i++) {
      this.push('Hello World')
    }
    this.push(null)
  },
})

const uppercase = new Transform({
  transform(chunk, encoding, callback) {
    callback(null, chunk.toString().toUpperCase())
  },
})

readable
  //   .pipe(process.stdout)
  .pipe(uppercase)
  .pipe(fs.createWriteStream('./write-big.file'))
  .on('end', function () {
    console.log('File written')
  })
