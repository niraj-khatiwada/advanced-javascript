import React from 'react'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      count: 0,
    }
  }

  render() {
    return (
      <div>
        {this.state.count}
        <button
          onClick={() =>
            this.setState((previousState) => ({
              count: previousState.count + 1,
            }))
          }
        >
          Click
        </button>
      </div>
    )
  }
}

export default App
