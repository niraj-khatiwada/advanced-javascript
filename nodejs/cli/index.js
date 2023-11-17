import { createInterface } from 'readline'

console.log(process.argv.slice(2))

const readline = createInterface({
  input: process.stdin,
  output: process.stdout,
})

readline.question('What is your name?\n', function (name) {
  console.log(`Hello ${name}`)
  process.exit(0)
})
