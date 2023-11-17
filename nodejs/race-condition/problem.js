let balance = 200

async function sleep(time) {
  return new Promise((resolve) => setTimeout(resolve, time))
}

async function withdraw(amount) {
  if (amount > balance) {
    console.log('Withdraw amount greater than balance.')
    return
  }
  await sleep(Math.random() * 2)
  balance -= amount
  console.log(`${amount} withdrawn. Remaining balance ${balance}`)
}

;(async function () {
  await Promise.all([withdraw(100), withdraw(150)])
})()
