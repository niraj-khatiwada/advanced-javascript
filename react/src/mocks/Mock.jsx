import React from 'react'

function Mock() {
  const [data, setData] = React.useState([])
  React.useEffect(() => {
    fetch('/api/v1/todos', {
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          console.log('---', data)
          setData(data)
        }
      })
  }, [])

  return (
    <div>
      <h1>Mock API...</h1>
      <pre>{JSON.stringify(data ?? [], null, 2)}</pre>
    </div>
  )
}

export default Mock
