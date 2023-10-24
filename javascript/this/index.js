'use strict'

// this is the object that the function is a property of
// this represents the object where the method resides

console.log(this)

function test() {
  console.log(this, arguments)
}

// Try to run this with and without strict mode.

test() // If strict mode is on, the test although resides in window object. The execution won't bind it as method of window. Instead it calls it independently. That's why you usee `undefined` here.

window.test() // Explicitly calling test from window, we are binding the method into window object so you will see `Window{}` here.

const obj = {
  test() {
    console.log(this)
  },
}

obj.test()

// const obj2 = {
//   fName: 'Niraj',
//   lName: 'Khatiwada',
//   fullName() {
//     var caller = () => {
//       console.log('caller', this) // This will be Window not obj2 because var is hoisted
//     }
//     caller()
//     return this.fName + this.lName
//   },
// }

// obj2.fullName()

const obj2 = {
  fName: 'Niraj',
  lName: 'Khatiwada',
  fullName() {
    function caller() {
      console.log('caller', this)
    }
    caller()
    return this.fName + this.lName
  },
}

obj2.fullName()

// Exercise
console.log('------')
// const a = function () {
//   console.log(this) // window
//   const b = function () {
//     console.log(this) // window
//     const c = {
//       hi: function () {
//         console.log(this)
//       },
//     }
//     c.hi() // c
//   }
//   b()
// }

// Make sure to enable strict mode at the top of the file
// console.log('---Strict Mode---')
// const a = function () {
//   console.log(this) // undefined
//   const b = function () {
//     console.log(this) // undefined
//     const c = {
//       hi: function () {
//         console.log(this)
//       },
//     }
//     c.hi() // c
//   }
//   b()
// }

// a()
