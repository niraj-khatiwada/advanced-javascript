import React from 'react'
import './index.css'

function App() {
  return (
    <div>
      {React.cloneElement(
        <button />,
        {
          onClick: function () {
            console.log('Clicked')
          },
        },
        <>Hello World</>
      )}
      {/* <button
        onClick={function () {
          console.log('Clicked')
        }}
      >
        Hello World
      </button> */}
    </div>
  )
}

export default App
