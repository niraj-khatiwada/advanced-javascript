import { Mutex } from 'async-mutex'

let balance = 200

const mutex = new Mutex()

async function sleep(time) {
  return new Promise((resolve) => setTimeout(resolve, time))
}

async function withdraw(amount) {
  console.log('Is locked', mutex.isLocked())
  const release = await mutex.acquire()
  if (amount > balance) {
    console.log('Withdraw amount greater than balance.')
    return
  }
  await sleep(Math.random() * 2)
  balance -= amount
  release()
  console.log(`${amount} withdrawn. Remaining balance ${balance}`)
}

;(async function () {
  await Promise.all([withdraw(100), withdraw(150)])
})()
