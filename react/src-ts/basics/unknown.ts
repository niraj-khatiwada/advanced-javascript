// Any allows you to do anything
let abcd: any

abcd.length
abcd.toFixed(2)
abcd.toISOString()

// Unknown is a little bit restrictive than any
let abcde: unknown

if (typeof abcde === 'string') {
  abcde.length
}

if (typeof abcde === 'number') {
  abcde.toFixed(2)
}

if (abcde instanceof Date) {
  abcde.toISOString()
}
