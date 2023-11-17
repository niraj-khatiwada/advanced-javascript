// Readable
// Writable
// Transfer

import { Readable, Transform } from 'stream'
import fs from 'fs'

const readable = new Readable({
  read: function () {
    for (let i = 0; i < 100_000; i++) {
      this.push(Buffer.from(i.toString()))
    }
    this.push(null)
  },
})

const transform = new Transform({
  transform: function (chunk, encoding, cb) {
    // console.log('Encoding', encoding)
    cb(null, chunk + Buffer.from('Niraj'))
  },
})

readable
  .pipe(transform)
  .pipe(fs.createWriteStream('./abc.txt'))
  .on('end', function () {
    console.log('File written successfully.')
  })
