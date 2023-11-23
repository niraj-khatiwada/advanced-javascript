;(function () {
  type User = {
    name: string
    age: number
    gender: 'male' | 'female'
  }

  const user: Omit<User, 'gender'> = { name: 'Niraj', age: 26 }
  const userGender: Pick<User, 'gender'> = { gender: 'male' }
})()
