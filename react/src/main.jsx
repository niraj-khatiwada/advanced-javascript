import ReactDom from 'react-dom/client'

import App from './App'
import { worker } from './mocks/browser'

if (import.meta.env.DEV) {
  worker.start()
}

ReactDom.createRoot(document.getElementById('root')).render(<App />)
