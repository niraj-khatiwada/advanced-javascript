;(function () {
  function getLength(a: any[]): number
  function getLength(a: string): number
  function getLength(a: string | any[]): number {
    return a.length
  }

  console.log(getLength('Niraj'))
})()
