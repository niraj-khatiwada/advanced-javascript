function* generate() {
  yield 1
  yield 2
  yield 3
}

const gen = generate()
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
