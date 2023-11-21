import React from 'react'

function States() {
  const [random, setRandom] = React.useState<string | number>('random')

  function handleClick() {
    setRandom(100)
  }
  return <button onClick={handleClick}>{random}</button>
}

export default States
