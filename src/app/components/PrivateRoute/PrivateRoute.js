import { Redirect, Route } from 'react-router-dom'
import { useSession } from 'app/context/SesionContext'

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  const currentUser = useSession()
  return (
    <Route
      {...rest}
      render={(routeProps) =>
        !!currentUser ? (
          <RouteComponent {...routeProps} />
        ) : (
          <Redirect to={'/login'} />
        )
      }
    />
  )
}
export default PrivateRoute
