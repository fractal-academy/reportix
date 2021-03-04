import { useEffect, useState } from 'react'
import firebaseConfig from './constants/firebaseConfig'
import Login from 'components/Login'
import { auth } from './services/Firebase/firebase'
import { Dashboard } from 'components'
import { ROUTES_PATHS, ROUTES_VALUE } from './constants'
import { PrivateRoute } from 'components/PrivateRoute'
import { Redirect, Route, Switch } from 'react-router-dom'
import { START_PAGE } from './constants/role'
import { useSession } from './context/SesionContext'

const App = () => {
  const session = useSession()

  return (
    <Switch>
      {ROUTES_VALUE.map((route) => {
        if (route.protect) {
          return <PrivateRoute {...route} key={route.path} />
        }
        return <Route key={route.path} {...route} />
      })}
      <Redirect
        to={
          (session && START_PAGE[session?.role?.toUpperCase()]) ||
          ROUTES_PATHS.LOGIN
          // '/dashboard'
        }
      />
    </Switch>
  )
}

export default App
