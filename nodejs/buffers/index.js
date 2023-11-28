import { Buffer } from 'node:buffer'

const alloc = Buffer.alloc(5)
alloc.fill('N', 0, 1)
alloc.fill('i', 1, 2)
alloc.fill('r', 2, 3)
alloc.fill('a', 3, 4)
alloc.fill('j', 4, 5)

console.log('Buffer', alloc) // Buffer.from("Niraj")
console.log('String', Buffer.from(alloc).toString())

console.log(Buffer.from('String', 'utf-8'))
console.log(Buffer.from([1, 2, 3])) // Works for array as well
// console.log(Buffer.from({ name: 'Niraj' })) // Does not work for object
