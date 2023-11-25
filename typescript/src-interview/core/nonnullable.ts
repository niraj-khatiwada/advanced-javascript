;(function () {
  type Nullable = null | undefined | string
  type NN = NonNullable<Nullable>

  //   const abc: NN = null
  const abc: NN = 'Niraj'
})()
