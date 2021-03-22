import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import App from 'app'
import Theme from 'app/config/theme'
import { ThemeProvider } from '@qonsoll/react-design'
import { AuthProvider } from 'app/context/SesionContext/useSession'
import 'antd/dist/antd.css'

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
