import React from 'react'

const INITIAL_STATE = {
  id: 1,
  name: 'Niraj',
}

function reducer(state, action) {
  console.log(action)
  switch (action.type) {
    case 'LOGIN':
      return { ...state, id: action?.payload?.id, name: action?.payload?.name }

    default:
      return state
  }
}

function Reducer() {
  const [state, setState] = React.useReducer(reducer, INITIAL_STATE)

  return (
    <div>
      {state?.id}: {state?.name}
      <button
        onClick={function () {
          setState({ type: 'LOGIN', payload: { id: 2, name: 'Meir' } })
        }}
      >
        Change User
      </button>
    </div>
  )
}

export default Reducer
