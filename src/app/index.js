import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Login } from 'app/services/Auth'
import { SignUp } from 'app/services/Auth'
import { Dashboard } from 'components'
import PrivateRoute from 'components/PrivateRoute'
import { AuthProvider } from './context/SesionContext/useSession'
import { ThemeProvider } from '@qonsoll/react-design'
import Theme from 'app/config/theme'
import 'app/config/root.scss'

const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <AuthProvider>
        <Router>
          <PrivateRoute exact path="/" component={Dashboard} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
        </Router>
      </AuthProvider>
    </ThemeProvider>
  )
}

export default App
