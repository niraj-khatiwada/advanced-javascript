;(function () {
  type Person = {
    name: string
    age: number
    gender: 'male' | 'female'
  }

  // Makes all entries optional
  const optional: Partial<Person> = {
    name: 'Niraj',
    age: 26,
  }
  // Makes all optional fields required
  const all: Required<Person> = {
    name: 'Niraj',
    age: 26,
    gender: 'male',
  }
})()
