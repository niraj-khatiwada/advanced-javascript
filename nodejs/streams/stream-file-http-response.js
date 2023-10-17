import http from 'http'
import fs from 'fs'

const largeFile = fs.createReadStream(
  '/home/niraj/Documents/master-nodejs-streams/streams/big.file'
)

// Streaming files in Node.js
const server = http.createServer(function (req, res) {
  res.setHeader('Content-Length', 2.2 * 1e9) // Total size of file.
  res.setHeader(
    'Content-Disposition',
    "attachment; filename=big-file.txt; modification-date='Wed, 12 Feb 1997 16:29:51 -0500"
  )
  largeFile.on('data', function (chunk) {
    res.write(chunk, 'utf-8')
  })

  return
})

server.listen(3000, function () {
  console.log('Server started')
})
