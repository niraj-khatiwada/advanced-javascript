import readline from 'readline'

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

reader.question('What is your name? ', (name) => {
  console.log('Nice ', name)
  reader.close()
})
