const test = <T>(a: T): T[] => {
  return [a]
}

const test2 = function <T>(a: T): T[] {
  return [a]
}
