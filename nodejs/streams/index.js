import fs from 'fs'

import { Transform } from 'node:stream'

const transform = new Transform({
  transform: function (chunk, _, cb) {
    console.log('---------\n', chunk.toString())
    cb(null, chunk.toString() + 'Niraj')
  },
})

fs.createReadStream('./big.file')
  .pipe(transform)
  .pipe(fs.createWriteStream('./abc.txt'))
  // .on('data', function (chunk) {
  //   console.log('\n', chunk.toString())
  // })
  .on('close', function () {
    console.log('complete')
  })
