import { Redirect, Route } from 'react-router-dom'
import { useSession } from 'app/context/SesionContext'
import { ROUTES_PATHS } from 'app/constants'

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  const currentUser = useSession()
  return (
    <Route
      {...rest}
      render={(routeProps) =>
        !!currentUser ? (
          <RouteComponent {...routeProps} />
        ) : (
          <Redirect to={ROUTES_PATHS.LOGIN} />
        )
      }
    />
  )
}
export default PrivateRoute
