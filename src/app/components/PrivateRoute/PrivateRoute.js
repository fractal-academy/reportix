import { useContext } from 'react'
import { Redirect, Route } from 'react-router-dom'
import AuthContext from 'app/context/SesionContext'
import { PageWrapper } from 'components'

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  const { currentUser } = useContext(AuthContext)
  return (
    <PageWrapper>
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
    </PageWrapper>
  )
}
export default PrivateRoute
