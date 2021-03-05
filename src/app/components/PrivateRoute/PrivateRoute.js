import { useContext } from 'react'
import { Redirect, Route } from 'react-router-dom'
import { AuthContext } from '../../services/Auth/Auth'

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  const { currentUser } = useContext(AuthContext)
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

// const PrivateRoute = (props) => {
//   const { protect, ...rest } = props
//   const [match, setMatch] = useState(true)
//   const session = useSession()
//   const history = useHistory()
//   useEffect(() => session && setMatch(protect.includes(session.role)), [])
//   useEffect(
//       () => !match && history.replace(START_PAGE[session.role.toUpperCase()]),
//       [match]
//   )
//   return <Route {...rest} />
// }
//
// export default PrivateRoute
