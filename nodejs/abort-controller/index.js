// Built in fetch does not have abort controller support yet

let abortController
;(async function () {
  try {
    for (let i = 0; i < 10; i++) {
      if (abortController) {
        abortController.abort('Aborted')
        console.log('Aborted')
      }
      abortController = new AbortController()
      fetchData(abortController.signal)
    }
  } catch (error) {
    console.log(error)
  }

  async function fetchData(signal) {
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/users', {
        headers: { 'Content-Type': 'application/json' },
        signal: signal,
        cache: 'no-store',
      })
      const data = await res.json()
      console.log('--DATA--', Object.keys(data).length)
    } catch (error) {}
  }
})()
