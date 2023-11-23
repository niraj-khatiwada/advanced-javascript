;(function () {
  type User = {
    name: string
    age: number
    data: { name: string; age?: 26 }
    gender?: 'male' | 'female'
  }
  /* --------Object.freeze()---------- */
  // Cannot change (enumerable=true) or delete entries within one level nesting
  // This is a shallow freeze
  const user: User = Object.freeze({
    name: 'Niraj',
    age: 26,
    data: { name: 'Niraj' },
  })
  //   user.name = 'Suraj' // will throw error in strict mode which is on in TypeScript
  user.data.name = 'Suraj' // This will still work

  delete user.data.age // This will still work
  console.log('--User--', user)

  /* Object.seal() */
  // Can change value(enumerable=true) but cannot delete within one level nesting
  // This is a shallow seal
  const userSealed: User = Object.seal({
    name: 'Niraj',
    age: 26,
    data: { name: 'Niraj', age: 26 },
    gender: 'male',
  })

  userSealed.name = 'Suraj'

  //   delete userSealed.gender // Will throw error

  delete userSealed.data.age

  console.log(userSealed)
})()
