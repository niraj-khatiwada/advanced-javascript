export function reverse(str) {
  const stack = []

  for (let i = 0; i < str.length; i++) {
    stack.push(str[i])
  }

  const stack2 = []
  for (let i = 0; i < str.length; i++) {
    stack2[i] = stack.pop()
  }

  console.log(stack2.join(''))
}
