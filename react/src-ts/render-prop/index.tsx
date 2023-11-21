import React from 'react'

interface Props {
  children: (_: { count: number }) => React.ReactNode
}

function RenderPropComponent(props: Props) {
  const [count, setCount] = React.useState(0)
  function handleClick() {
    console.log('Call backend to update like post')
    setCount((_) => _ + 1)
  }

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={handleClick}
      style={{ cursor: 'pointer' }}
    >
      {props.children({ count })}
    </div>
  )
}

export { RenderPropComponent }
