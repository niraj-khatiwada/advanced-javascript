import React from 'react'

interface Props {
  // buttonProps?: React.ComponentProps<'button'>
  buttonProps?: React.ComponentPropsWithoutRef<'button'>
}

function States(props: Props) {
  const [random, setRandom] = React.useState<string | number>('random')

  function handleClick() {
    setRandom(100)
  }
  return (
    <button onClick={handleClick} {...props.buttonProps}>
      {random}
    </button>
  )
}

export default States
