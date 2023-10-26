// Without finally
function sum(a, b) {
  try {
    return a + b
  } catch (_) {
    return null
  }
}

function sumWithFinally(a, b) {
  try {
    return a + b
  } catch (_) {
    return null
  } finally {
    return a + b + 1
  }
}

console.log(sum(1, 2)) // 3
console.log(sumWithFinally(1, 2)) // 4
