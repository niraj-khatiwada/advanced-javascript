let ac

async function getUsers() {
  if (!(ac == null)) {
    ac.abort()
  }
  ac = new AbortController()
  const usersJSON = await fetch(
    'https://jsonplaceholder.typicode.com/users/1',
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      signal: ac.signal,
    }
  )
  const users = await usersJSON.json()
  return users
}

;(async function () {
  const [one, two] = await Promise.allSettled([getUsers(), getUsers()])
  console.log(one, two)
})()
