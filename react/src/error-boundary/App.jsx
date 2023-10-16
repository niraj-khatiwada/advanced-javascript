import React from 'react'

class ErrorBoundary extends React.Component {
  constructor() {
    super()
    this.state = {
      errorEncountered: false,
    }
  }

  static getDerivedStateFromError() {
    return { errorEncountered: true }
  }

  componentDidCatch(error, info) {
    console.log('Error Boundary', error, info)
  }

  render() {
    return this.state.errorEncountered ? (
      <p>Error Encountered</p>
    ) : (
      // eslint-disable-next-line react/prop-types
      this.props.children
    )
  }
}

function App() {
  return (
    <ErrorBoundary>
      <div>
        <Button />
      </div>
    </ErrorBoundary>
  )
}

function Button() {
  if (Math.ceil(Math.random() * 10) % 2 === 0) {
    throw new Error()
  }
  return <button>Throw error</button>
}

export default App
