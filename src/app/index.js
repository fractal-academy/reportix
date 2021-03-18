import { Redirect, Route, Switch } from 'react-router-dom'
import PrivateRoute from 'components/PrivateRoute'
import { AuthContext } from './context/SesionContext/useSession'
import { ROUTES_VALUE, ROUTES_PATHS } from 'app/constants'
import { Login, SignUp } from 'app/services/Auth'
import { PageWrapper } from 'components'
import 'app/config/root.scss'
import { useContext } from 'react'

const App = () => {
  const { currentUser } = useContext(AuthContext)

  return (
    <Switch>
      {!currentUser ? (
        <>
          <Route component={Login} path={ROUTES_PATHS.LOGIN} />
          <Route component={SignUp} path={ROUTES_PATHS.SIGN_UP} />
        </>
      ) : (
        <PageWrapper>
          <>
            {ROUTES_VALUE.map((route) => (
              <PrivateRoute key={route.path} {...route} />
            ))}
          </>
          {/*<Route path="/" render={() => <Redirect to={ROUTES_PATHS.DASHBOARD} />} />*/}
        </PageWrapper>
      )}
    </Switch>
  )
}

export default App
