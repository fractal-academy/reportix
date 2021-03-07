import React from 'react'
import ReactDOM from 'react-dom'
import App from './app/App'
import { BrowserRouter as Router } from 'react-router-dom'
import 'antd/dist/antd.css'
import { SessionProvider } from './app/context/SesionContext'

ReactDOM.render(
  <SessionProvider>
    <Router>
      <App />
    </Router>
  </SessionProvider>,
  document.getElementById('root')
)
