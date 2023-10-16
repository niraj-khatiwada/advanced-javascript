import React from 'react'

function App() {
  const [paymentUI, setPaymentUI] = React.useState(null)
  async function handlePayment() {
    try {
      setPaymentUI((await import('./Payment')).default)
      console.log('Processing started')
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div>
      <button onClick={handlePayment}>Start Payment</button>
      {paymentUI}
    </div>
  )
}

export default App
