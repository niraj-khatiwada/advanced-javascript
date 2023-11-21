;(function () {
  type Grades = 'A' | 'B' | 'C' | 'D' | 'E'

  // Only works with union types
  type AorB = Extract<Grades, 'A' | 'B'>
  const a: AorB = 'A'

  type _AorB = Exclude<Grades, 'C' | 'D' | 'E'>
  const b: _AorB = 'B'
})()
