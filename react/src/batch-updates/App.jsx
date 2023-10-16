import React from 'react'

function App() {
  const [state1, setState1] = React.useState(1)
  const [state2, setState2] = React.useState(2)
  const [state3, setState3] = React.useState(3)

  React.useEffect(() => {
    console.log('Re-rendered')
  }, [state1, state2, state3])
  return (
    <div>
      <p>{state1}</p>
      <p>{state2}</p>
      <p>{state3}</p>
      <button
        onClick={async function () {
          setState1(2)
          setState2(3)
          setState3(4)
        }}
      >
        Click
      </button>
    </div>
  )
}

export default App
