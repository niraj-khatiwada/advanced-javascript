function main() {
  for (let i = 0; i < 10; i++) {
    f(i)
  }
}

let abort = null
async function f(index) {
  try {
    if (!(abort == null)) {
      abort.abort()
    }
    abort = new AbortController('Aborted')
    const res = await fetch('https://jsonplaceholder.typicode.com/users/1', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      signal: abort.signal,
    })
    console.log(`${index} \n`, await res.json())
  } catch (_) {
    console.log(_)
  }
}

main()
