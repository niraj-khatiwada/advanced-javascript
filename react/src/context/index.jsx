import React from 'react'

const UserContext = React.createContext()
UserContext.displayName = 'UserContext'

function Context() {
  return (
    <UserContext.Provider value={{ id: 100 }}>
      <div>Context</div>
      <Receive />
    </UserContext.Provider>
  )
}

function Receive() {
  const { id } = React.useContext(UserContext)
  return <p>User ID:{id}</p>
}

export default Context
