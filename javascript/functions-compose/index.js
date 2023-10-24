// fn1(fn2(fn3(...args)))

function compose(...argFn) {
  // n number os arities. arity = number of arguments of a function
  return function (...args) {
    return argFn.reduceRight((a, c) => {
      a = a == null ? c(...args) : c(a)
      return a
    }, null)
  }
}

function addByTen(num) {
  return num + 10
}
function multiplyByTen(num) {
  return num * 10
}

const addTenAndMultiplyTen = compose(multiplyByTen, addByTen, addByTen)

console.log(addTenAndMultiplyTen(2))
