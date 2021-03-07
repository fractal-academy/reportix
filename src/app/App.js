import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Login } from './services/Auth'
import { SignUp } from './services/Auth'
import Dashboard from 'components'
import PrivateRoute from 'components/PrivateRoute'
import { AuthProvider } from './services/Auth/Authentification'

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <>
          <PrivateRoute exact path="/" component={Dashboard} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
        </>
      </Router>
    </AuthProvider>
  )
}

export default App