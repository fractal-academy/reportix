import { Redirect, Route, Switch } from 'react-router-dom'
import { ROUTES_VALUE, ROUTES_PATHS } from 'app/constants'
import { Login, SignUp } from 'app/services/Auth'
import { PageNotFound, PageWrapper, PrivateRoute } from 'components'
import 'app/config/root.scss'

const App = () => {
  return (
    <Switch>
      <Route exact path={ROUTES_PATHS.LOGIN} component={Login} />
      <Route exact path={ROUTES_PATHS.SIGN_UP} component={SignUp} />
      <Route
        exact
        path="/"
        render={() => <Redirect to={ROUTES_PATHS.USER_SHOW} />}
      />
      <PageWrapper>
        <Switch>
          {ROUTES_VALUE.map((route) => (
            <PrivateRoute key={route.path} {...route} />
          ))}
          <PrivateRoute component={PageNotFound} />
        </Switch>
      </PageWrapper>
    </Switch>
  )
}

export default App
