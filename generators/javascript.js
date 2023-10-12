function* generator() {
  // Do certain task
  yield 1
  // Do certain task
  yield 2
}

const task = generator()

console.dir(generator.__proto__)

console.log(task.next())
console.log(task.next())
console.log(task.next())
