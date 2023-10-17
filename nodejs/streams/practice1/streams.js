// import  from "../big.file"

import fs from 'fs'

const bigFile = fs.createReadStream(
  '/home/niraj/Documents/nodejs-advanced/streams/big.file'
)

bigFile.on('data', (chunk) => {
  //   console.log(chunk)
})

bigFile.on('error', (error) => {
  console.error(error)
})

bigFile.on('end', () => {
  console.log('Read completed')
})
