;(function () {
  type Person = {
    name: string
    age: number
    gender: 'male' | 'female'
  }

  // Only Remove certain entries
  const personWithoutGender: Omit<Person, 'gender'> = {
    name: 'Niraj',
    age: 26,
  }

  // Only pick certain entries
  const personWithoutName: Pick<Person, 'gender' | 'age'> = {
    gender: 'male',
    age: 26,
  }
})()
