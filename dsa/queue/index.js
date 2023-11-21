import { reverse } from './reverse.js'

const queue = []

queue.push(1)
queue.push(2)
queue.push(3)

console.log(reverse(queue))

const first = queue.shift()
const second = queue.shift()
const third = queue.shift()

console.log(first, second, third, queue)
