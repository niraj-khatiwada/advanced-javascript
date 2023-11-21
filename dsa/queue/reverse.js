export function reverse(queue = []) {
  const stack = []

  for (let i = 0; i < queue.length; i++) {
    stack.push(queue[i])
  }
  const stack2 = []
  for (let i = 0; i < queue.length; i++) {
    stack2.push(stack.pop())
  }

  return stack2
}
