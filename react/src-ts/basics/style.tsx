import React from 'react'

function StyleComponent({ style }: { style: React.CSSProperties }) {
  return <div style={style}>StyleComponent</div>
}

export { StyleComponent }
