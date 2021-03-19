import { Redirect, Route, Switch } from 'react-router-dom'
import PrivateRoute from 'components/PrivateRoute'
import { AuthProvider, useSession } from 'app/context/SesionContext/useSession'
import { ThemeProvider } from '@qonsoll/react-design'
import Theme from 'app/config/theme'
import { ROUTES_VALUE, ROUTES_PATHS } from 'app/constants'
import { Login, SignUp } from 'app/services/Auth'
import { PageNotFound, PageWrapper } from 'components'
import 'app/config/root.scss'

const App = () => {
  const currentUser = useSession()
  return (
    <ThemeProvider theme={Theme}>
      <AuthProvider>
        <Switch>
          <Route exact path={ROUTES_PATHS.LOGIN} component={Login} />
          <Route exact path={ROUTES_PATHS.SIGN_UP} component={SignUp} />
          <PageWrapper>
            <Switch>
              {ROUTES_VALUE.map((route) => (
                <PrivateRoute key={route.path} {...route} />
              ))}
              <PrivateRoute component={PageNotFound} />
            </Switch>
          </PageWrapper>
        </Switch>
      </AuthProvider>
    </ThemeProvider>
  )
}

export default App
