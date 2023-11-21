import React from 'react'

function Button() {
  function handleClick(evt: React.MouseEvent<HTMLButtonElement>) {
    evt.preventDefault
  }
  return <button onClick={handleClick}>Button</button>
}

export default Button
