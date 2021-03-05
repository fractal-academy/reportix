import { useEffect, useState } from 'react'
import FIREBASE_CONFIG from './constants/firebaseConfig'
import Login from './services/Auth/Login'
import { auth } from './services/Firebase/firebase'
import { Dashboard } from 'components'
// import { ROUTES_PATHS, ROUTES_VALUE } from './constants'
import { PrivateRoute } from 'components/PrivateRoute'
import { Redirect, Route, Switch } from 'react-router-dom'
// import { START_PAGE } from './constants/role'
// import { useSession } from './context/SesionContext'
import { BrowserRouter as Router } from 'react-router-dom'
import { AuthProvider } from './services/Auth/Auth'
import SignUp from './services/Auth/SignUp'

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <>
          <PrivateRoute exact path="/" component={Dashboard} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
        </>
      </Router>
    </AuthProvider>
  )
}

export default App
