// function withSum(num1, num2) {
//   const num3 = 100
//   return function () {
//     return num1 + num2 + num3
//   }
// }

// const ws = withSum(1, 2)

// ws()

// const list = [1, 2, 3, 4]

// for (var i = 0; i < list.length; i++) {
//   setTimeout(function () {
//     console.log('index', i)
//   }, 3000)
// }

// for (var i = 0; i < list.length; i++) {
//   setTimeout(function () {
//     console.log('index', i)
//   }, 3000)
// }

function heavyTask(index) {
  const list = new Array(100).fill(100)
  console.log('Heavy list created')
  return list[index]
}

// heavyTask(1)
// heavyTask(2)
// heavyTask(3)

function initializeHeavyTask() {
  const list = new Array(100).fill(100)
  console.log('Heavy list created')
  return function (index) {
    return list[index]
  }
}

const ht = initializeHeavyTask()
ht(1)
ht(2)
ht(3)
