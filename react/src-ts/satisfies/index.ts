type Config = {
  name: string
  age?: number
}

const config: Config = {
  name: 'Niraj',
  age: 26,
}

config.age?.toFixed(2)

const config2 = {
  name: 'Niraj',
  age: 26,
} satisfies Config

config2.age.toFixed(2)
