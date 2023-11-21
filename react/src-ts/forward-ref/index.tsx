import React from 'react'

export function ForwardedRefComponent() {
  const ref = React.useRef<HTMLInputElement>(null)

  return (
    <>
      <Input ref={ref}></Input>
      <button
        onClick={() => {
          ref.current?.focus()
        }}
      >
        Focus
      </button>
    </>
  )
}

interface InputProps {
  style?: React.ComponentPropsWithRef<'button'>['style']
}

// Aware: The generic and function parameter are opposite here. No idea what React team were upto.

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ style }, fRef) => {
    const ref = React.useRef<HTMLInputElement>(null)

    React.useImperativeHandle(fRef, () => ref.current!, [])

    return (
      <input
        ref={ref}
        style={style}
        onClick={function () {
          ref.current?.focus()
        }}
      />
    )
  }
)

Input.displayName = 'Input'
