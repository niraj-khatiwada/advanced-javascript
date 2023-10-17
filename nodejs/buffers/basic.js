import { Buffer } from 'buffer'

// const abc = Buffer.from('Niraj', 'utf-8')
// console.log(abc)
// console.log(abc.toString())

// Allocate
const allocated = Buffer.alloc(5) // Grab 5 byte from OS memory

allocated.fill('Ni', 0, 2) // Each character is 1 byte
// allocated.fill('raj', 2, 5)
// allocated.fill('out of range', 5, 7)// out of range

console.log(allocated.toString(), allocated.byteLength)

// Directly fill with allocation. This is same as Buffer.from(string)
const data = 'Niraj'
const a2 = Buffer.alloc(data.length, data)

console.log(a2.toString(), a2)

// console.log(Buffer.from('Niraj', 'utf-8').toJSON())
