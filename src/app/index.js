import { Route, Switch } from 'react-router-dom'
import PrivateRoute from 'components/PrivateRoute'
import { AuthProvider } from './context/SesionContext/useSession'
import { ThemeProvider } from '@qonsoll/react-design'
import Theme from 'app/config/theme'
import { ROUTES_VALUE } from 'app/constants'
import 'app/config/root.scss'

const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <AuthProvider>
        <Switch>
          {ROUTES_VALUE.map((route) => {
            if (route.protect) {
              return <PrivateRoute key={route.path} {...route} />
            }
            return <Route key={route.path} {...route} />
          })}
        </Switch>
      </AuthProvider>
    </ThemeProvider>
  )
}

export default App
