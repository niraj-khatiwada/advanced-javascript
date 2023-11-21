import React from 'react'

type User = {
  name: string
  age: number
}

const defaultUser: User = { name: 'Niraj', age: 26 }

const UserContext = React.createContext<{
  user: User
  setUser: React.Dispatch<React.SetStateAction<User>>
}>({ user: defaultUser, setUser: () => null })
UserContext.displayName = 'UserContext'

export function Provider() {
  const [user, setUser] = React.useState<User>(defaultUser)
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Consumer />
    </UserContext.Provider>
  )
}

function Consumer() {
  const { user, setUser } = React.useContext(UserContext)

  return (
    <button
      onClick={function () {
        setUser((previousUser) => ({
          ...previousUser,
          name: previousUser.name + new Date().toString(),
        }))
      }}
    >
      {user.name ?? '--'}
    </button>
  )
}

export default Provider
