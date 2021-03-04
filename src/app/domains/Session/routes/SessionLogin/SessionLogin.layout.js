import { useCallback, useEffect, useState } from 'react'
// import { SessionSimpleView } from 'domains/Session/components/views'
import { auth } from 'app/services/Firebase/firebase'
import { Dashboard } from 'components/Dashboard'
import Login from 'components/Login'
import { ROUTES_PATHS, ROUTES_VALUE } from 'app/constants'
import { PrivateRoute } from 'components/PrivateRoute'
import { Route, Redirect, Switch, BrowserRouter } from 'react-router-dom'
import { START_PAGE } from 'app/constants/role'
import { useSession } from 'app/context/SesionContext/hooks'

const SessionLogin = () => {
  const [user, setUser] = useState('')

  const handleLogOut = () => {
    auth.signOut()
  }
  const authListener = () => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user)
      } else {
        setUser('')
      }
    })
  }
  useEffect(() => {
    authListener()
  }, [])
  return <>{user ? <Dashboard handleLogout={handleLogOut} /> : <Login />}</>
}

export default SessionLogin
