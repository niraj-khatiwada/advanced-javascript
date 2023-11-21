import React from 'react'

export enum Shape {
  Circle,
  Rectangle,
  Square,
}

type Circle = {
  shape: Shape.Circle
  radius: number
}

type Rectangle = {
  shape: Shape.Rectangle
  length: number
  breadth: number
}

type Square = {
  shape: Shape.Square
  length: number
}

function calculateArea(shape: Circle | Rectangle | Square) {
  switch (shape.shape) {
    case Shape.Circle: {
      return Math.PI * (shape.radius ^ 2)
    }

    case Shape.Rectangle: {
      return shape.length * shape.breadth
    }

    case Shape.Square: {
      return shape.length ^ 2
    }
    default: {
      throw new Error()
    }
  }
}

function DiscriminatedTypeComponent(props: Circle | Square | Rectangle) {
  const area = calculateArea(props)
  return (
    <>
      <div>DiscriminatedTypeComponent</div>
      <div>Area: {area}</div>
    </>
  )
}

export default DiscriminatedTypeComponent
