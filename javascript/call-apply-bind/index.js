'use strict'

function sum(num1, num2) {
  console.log(this)
  return num1 + num2 + this?.abc ?? ''
}

console.log(sum(1, 2))
console.log(sum.call(this, 1, 2))
console.log(sum.apply(this, [1, 2]))

console.log(sum.bind(this, 1, 2)())
console.log(sum.bind({ abc: 'def' }, 1, 2)())
