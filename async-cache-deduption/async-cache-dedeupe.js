import { createCache } from 'async-cache-dedupe'
import superJSON from 'superjson'

const cache = createCache({
  ttl: 5,
  stale: 5,
  transformer: {
    serialize: superJSON.serialize,
    deserialize: superJSON.deserialize,
  },
  onDedupe: function (key) {
    console.log('Deduped', key)
  },
})

cache.define('fetch', async function (url) {
  const response = await fetch(url, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  })
  const user = await response.json()
  return {
    url: user,
  }
})

const user = cache.fetch('https://jsonplaceholder.typicode.com/users/1')
const user1 = cache.fetch('https://jsonplaceholder.typicode.com/users/1')
const user2 = cache.fetch('https://jsonplaceholder.typicode.com/users/2')

const all = await Promise.all([user, user1, user2])

console.log(JSON.stringify(all, null, 2))
