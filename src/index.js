import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import { BrowserRouter as Router } from 'react-router-dom'
import 'antd/dist/antd.css'
import { ThemeProvider } from '@qonsoll/react-design'
import Theme from './app/config/theme'
import { AuthProvider } from './app/context/SesionContext/useSession'

ReactDOM.render(
  <ThemeProvider theme={Theme}>
    <AuthProvider>
      <Router>
        <App />
      </Router>
    </AuthProvider>
  </ThemeProvider>,
  document.getElementById('root')
)
