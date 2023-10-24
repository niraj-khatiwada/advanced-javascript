const fn1 = new Promise(function (resolve) {
  setTimeout(function () {
    resolve('FN1')
  }, 1000)
})

const fn2 = new Promise(function (resolve) {
  setTimeout(function () {
    resolve('FN2')
  }, 2000)
})

const fn3 = new Promise(function (resolve) {
  setTimeout(function () {
    resolve('FN3')
  }, 1500)
})

Promise.all([fn1, fn2, fn3]) // Runs in parallel. Rejects if any one of the promise rejects
Promise.allSettled([fn1, fn2, fn3]) // Runs in parallel. Does not reject when any of the promises rejects

Promise.race([fn1, fn2, fn3]) // Runs in parallel. Whichever resolves or rejects first, it will be returned
