import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from 'react-router-dom'
import PrivateRoute from 'components/PrivateRoute'
import { AuthProvider } from './context/SesionContext/useSession'
import { useSession } from 'app/context/SesionContext'
import { ThemeProvider } from '@qonsoll/react-design'
import Theme from 'app/config/theme'
import { ROUTES_VALUE, ROUTES_PATHS } from 'app/constants'
import 'app/config/root.scss'

const App = () => {
  const { currentUser } = useSession()
  return (
    <ThemeProvider theme={Theme}>
      <AuthProvider>
        <Router>
          <Switch>
            {ROUTES_VALUE.map((route) => {
              if (route.protect)
                return <PrivateRoute {...route} key={route.path} />
              return <Route key={route.path} {...route} />
            })}
            <Redirect
              to={(currentUser && ROUTES_PATHS.DASHBOARD) || ROUTES_PATHS.LOGIN}
            />
          </Switch>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  )
}

export default App
