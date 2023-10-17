import { Buffer } from 'buffer'
import { readFile } from 'fs/promises'

// Node.js has 2GB file limit.
// This kind of file reading will clog the OS memory
// const txt = await readFile(
//   '/home/niraj/Documents/master-nodejs-streams/buffers/big-data.rar',
//   'utf-8'
// )

// console.log(txt)

// Buffer Streams

// readable stream  = any data resource you are going to consume. Eg: files, database, web request, etc.
// transfer stream = convert read stream to other format
// writable stream = final output
// pipelines = each chunks in stream is processed in a funnel called pipelines
// Eg: In the http module of Node.js, the request object is a readable stream and res object is a writable stream. That's why you can read new request as a stream and return buffer as response object as well.
