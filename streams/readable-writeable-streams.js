import fsPromise from 'fs/promises'
import fs from 'fs'

// Use this command to generate big files
// for i in `seq 1 20`; do node -e "process.stdout.write('hello world'.repeat(1e7))" >> big.file; done

// This will fail for file size >= 2GB
// const file = await fsPromise.readFile(
//   '/home/niraj/Documents/master-nodejs-streams/streams/big.file'
// )

const largeFile = fs.createReadStream(
  '/home/niraj/Documents/master-nodejs-streams/streams/big.file'
)

let size = 0
largeFile.on('data', function (chunk) {
  //   console.log(chunk.toString())
  size += chunk.byteLength
})

largeFile.on('end', function () {
  console.log('File size is ' + size / 1000_000_000, 'GB')
})

// Read n bytes
// largeFile.on('readable', (_) => {
//   console.log(largeFile.read(11).toString())
// })
