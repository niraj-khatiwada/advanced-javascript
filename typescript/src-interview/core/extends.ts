;(function () {
  type ABC<T> = T extends string ? string : never

  const abc: ABC<string> = 'Niraj'
})()
