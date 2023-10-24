function sum(num1, num2) {
  return num1 + num2
}
// Got value num1 but num2 is still unknown
const sum1 = sum.bind(this, 1)

// Got value num2 now

const finalSum = sum1.bind(this, 2)

console.log(finalSum())

// Currying with closure
function curriedSum(num1) {
  return function (num2) {
    return num1 + num2
  }
}

// First value
const s = curriedSum(1)

// Second value
const final = s(2)
