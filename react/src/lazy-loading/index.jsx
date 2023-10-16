import React from 'react'

const App = React.lazy(() => import('./App'))

function Index() {
  return (
    <div>
      <App />
    </div>
  )
}

export default Index
