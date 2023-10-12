import { Readable, Writable, Transform } from 'stream'
import fs from 'fs'

const readFile = new Readable({
  read() {
    for (let i = 0; i < 1e6; i++) {
      this.push('Hello World' + i)
    }
    this.push(null)
  },
})

const append = new Transform({
  transform(chunk, encoding, callback) {
    callback(null, `${Buffer.from(chunk, 'utf-8')}-${+new Date()}`)
  },
})

readFile.pipe(append)
//   .pipe(fs.createWriteStream('./big.file'))
