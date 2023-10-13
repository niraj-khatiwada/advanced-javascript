// Instead of caching the value, we cache the async function(promise)

let cache = {}
function cacheAsync(loader) {
  return async (url) => {
    console.log('CACHE STORE', cache)
    console.log('Hitting request: ', url)
    if (url in cache) {
      // return cached result if available
      console.log('cache hit')
      return cache[url]
    }
    try {
      console.log('fresh hit')
      const responsePromise = loader(url)
      cache[url] = responsePromise
      return responsePromise
    } catch (error) {
      console.log('Error', error.message)
    }
  }
}

function delayedLoader(url) {
  return new Promise((r) => setTimeout(r, 1000, 'Returning ' + url))
}

const cachedLoader = cacheAsync(delayedLoader)

cachedLoader('url1').then((d) => console.log('First load got: ' + d))
cachedLoader('url1').then((d) => console.log('Second load got: ' + d))
cachedLoader('url2').then((d) => console.log('Third load got: ' + d))
cachedLoader('url2').then((d) => console.log('Fourth load got: ' + d))
console.log('Waiting for load to complete')
