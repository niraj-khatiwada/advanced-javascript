import React from 'react'

type State = {
  name: string
  age: number
  isLoggedIn: boolean
  isRegistered: boolean
}

type ActionTypes = 'LOGIN' | 'REGISTER' | 'RESET'

type Action =
  | {
      type: Extract<ActionTypes, 'LOGIN'>
      payload: { isLoggedIn: boolean }
    }
  | {
      type: Extract<ActionTypes, 'REGISTER'>
      payload: { isRegistered: boolean }
    }
  | {
      type: Extract<ActionTypes, 'RESET'>
    }

const INITIAL_STATE: State = {
  name: 'Niraj',
  age: 26,
  isLoggedIn: false,
  isRegistered: false,
}

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'LOGIN': {
      return { ...state, ...action.payload }
    }

    case 'REGISTER': {
      return { ...state, ...action.payload }
    }

    case 'RESET': {
      return { ...INITIAL_STATE }
    }

    default: {
      return state
    }
  }
}

export function Reducer() {
  const [state, dispatch] = React.useReducer(reducer, INITIAL_STATE)

  return (
    <>
      <button
        onClick={function () {
          dispatch({ type: 'LOGIN', payload: { isLoggedIn: true } })
        }}
      >
        Login
      </button>
      <button
        onClick={function () {
          dispatch({ type: 'REGISTER', payload: { isRegistered: true } })
        }}
      >
        Register
      </button>
      <button
        onClick={function () {
          dispatch({ type: 'RESET' })
        }}
      >
        Reset
      </button>
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </>
  )
}

export default Reducer
