;(function () {
  type Action =
    | { type: 'login'; payload: { sessionId: string } }
    | { type: 'logout' }

  function reducer(action: Action) {
    switch (action.type) {
      case 'login': {
        console.log(action.payload)
        //
      }
      case 'logout': {
        //
      }
      default: {
      }
    }
  }

  reducer({ type: 'login', payload: { sessionId: '100' } })
  reducer({ type: 'logout' })
})()
