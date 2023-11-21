import React from 'react'

interface Company {
  type: 'company'
  founder: string
}

interface Person {
  type: 'person'
  name: string
}

type Entity = Person | Company

/* Before */
// function isPerson(entity: Entity): boolean {
//   return entity.type === 'person'
// }

// function TypeNarrowingComponent({ entity }: { entity: Entity }) {
//   const _isPerson = isPerson(entity)

//   if (_isPerson) {
//     return (
//       <>
//         <div>Person</div>
//         <p>Name: {(entity as Person).name}</p>
//       </>
//     )
//   }
//   return (
//     <>
//       <div>Company</div>
//       <p>Founder: {(entity as Company).founder}</p>
//     </>
//   )
// }

/* After */
// See the return type of this function
function isPerson(entity: Entity): entity is Person {
  return entity.type === 'person'
}

function TypeNarrowingComponent({ entity }: { entity: Entity }) {
  const _isPerson = isPerson(entity)

  if (_isPerson) {
    return (
      <>
        <div>Person</div>
        <p>Name: {entity.name}</p>
      </>
    )
  }
  return (
    <>
      <div>Company</div>
      <p>Founder: {entity.founder}</p>
    </>
  )
}

export default TypeNarrowingComponent
