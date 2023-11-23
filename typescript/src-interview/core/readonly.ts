;(function () {
  type User = {
    readonly name: string
    age: number
  }
  const user: User = {
    name: 'Niraj',
    age: 26,
  }
  //   user.name = 'Suraj'
  console.log(user)

  // Make all entries Readonly

  const user1: Readonly<User> = { name: 'Niraj', age: 26 }
  //   user1.name = "asas"
  //   user1.age = 100
})()
