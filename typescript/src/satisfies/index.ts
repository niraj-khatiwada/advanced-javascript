type Config = {
  name: string
  age?: number
}

// const config: Config = {
//   name: 'Niraj',
//   age: 26,
// }

// config.age.toFixed(2) // This one throws type error because it looks at Config type and sees that age might be undefined as well

const config = {
  name: 'Niraj',
  age: 26,
} satisfies Config

config.age.toFixed(2) // This will work because config already satisfies the Config type and is sure that config has age value.
