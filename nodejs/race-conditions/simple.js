let balance = 200

async function wait(forTime = 0) {
  await new Promise((resolve) => {
    setTimeout(resolve, forTime)
  })
}

async function withdraw(amount) {
  console.log(
    `Withdraw Initiated for ${amount}. Current balance is = `,
    balance
  )
  if (amount <= balance) {
    await wait(Math.random() * 1500)
    balance -= amount
    console.log(`Withdraw Success ${amount}. Current balance is = `, balance)
  } else {
    console.log('Cannot withdraw.')
  }
}

async function load(amount) {
  console.log('Load Initiated. Current balance is = ', balance)
  await wait(Math.random() * 2000)
  balance += amount
  console.log('Load Success. Current balance is = ', balance)
}

;(async function () {
  withdraw(100)
  withdraw(150)
})()
