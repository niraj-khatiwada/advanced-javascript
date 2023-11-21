;(async function () {
  const p: Awaited<number> = await new Promise((resolve) =>
    resolve(Math.random())
  )
})()
