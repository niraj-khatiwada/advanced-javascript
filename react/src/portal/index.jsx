import ReactDOM from 'react-dom'

function Portal() {
  return ReactDOM.createPortal(
    <button>This is a portal</button>,
    document.getElementById('portal')
  )
}

export default Portal
