;(function () {
  // console.log(this)

  function called() {
    console.log(this)
  }
  called()
  const obj = {
    name: 'Niraj',
    print: called,
  }
  obj.print()
})()
