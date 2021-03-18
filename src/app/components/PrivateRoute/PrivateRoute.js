import { useContext } from 'react'
import { Redirect, Route } from 'react-router-dom'
import AuthContext from 'app/context/SesionContext'
import { ROUTES_PATHS } from '../../constants'

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  const { currentUser } = useContext(AuthContext)
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
