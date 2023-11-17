import { Buffer } from 'node:buffer'

// This command is syntactic sugar of below command
// const chunk = Buffer.from('Niraj')
// console.log(chunk)

// This happens under the hood for Buffer.from("Niraj")
const c = Buffer.alloc(5)
c.fill('N', 0, 1)
c.fill('i', 1, 2)
c.fill('r', 2, 3)
c.fill('a', 3, 4)
c.fill('j', 4, 5)
console.log(c.toString())

// Nodejs cannot read file greater than 2GB.

// Eg: In the http module of Node.js, the request object is a readable stream and res object is a writable stream. That's why you can read new request as a stream and return buffer as response object as well.
