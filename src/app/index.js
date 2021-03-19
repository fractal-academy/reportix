import { Redirect, Route, Switch } from 'react-router-dom'
import PrivateRoute from 'components/PrivateRoute'
import { AuthProvider } from 'app/context/SesionContext/useSession'
import { ThemeProvider } from '@qonsoll/react-design'
import Theme from 'app/config/theme'
import { ROUTES_VALUE, ROUTES_PATHS } from 'app/constants'
import { Login, SignUp } from 'app/services/Auth'
import { PageWrapper } from 'components'
import 'app/config/root.scss'

const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <AuthProvider>
        <Switch>
          <Route component={SignUp} path={ROUTES_PATHS.SIGN_UP} />
          <Route component={Login} path={ROUTES_PATHS.LOGIN} />
          <PageWrapper>
            {ROUTES_VALUE.map((route) => (
              <PrivateRoute key={route.path} {...route} />
            ))}
          </PageWrapper>
        </Switch>
        <Redirect to={ROUTES_PATHS.LOGIN} />
      </AuthProvider>
    </ThemeProvider>
  )
}

export default App
