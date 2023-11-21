import React from 'react'

export function Tuples({ tuples }: { tuples: [number, string] }) {
  return (
    <div>
      {tuples[0]}: {tuples[1]}
    </div>
  )
}
