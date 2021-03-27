import React, { useState, useEffect, useContext, useReducer } from 'react'
import { auth } from 'app/services/Firebase'
import { Spin } from 'antd'
import { Row, Col } from '@qonsoll/react-design'
import { getCollectionRef, getData } from 'services/Firestore'
import { COLLECTIONS } from 'app/constants'
import sessionReducer from './sessionReducer'
import SIGN_IN from './dispatchEventsType'

export const AuthContext = React.createContext()
export const AuthContextDispatch = React.createContext()

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(sessionReducer)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    auth.onAuthStateChanged(async (user) => {
      const userData =
        user &&
        (await getCollectionRef(COLLECTIONS.USERS).doc(user.uid).get()).data()
      const contextData = userData ? { ...userData, ...user } : user
      await dispatch({ type: SIGN_IN, payload: contextData })
      setLoading(false)
    })
  }, [])
  console.log('state', state)
  return (
    <AuthContext.Provider value={state}>
      <AuthContextDispatch.Provider value={dispatch}>
        {loading ? (
          <Row v="center" h="center" height="100vh">
            <Col cw="auto">
              <Spin size="large" />
            </Col>
          </Row>
        ) : (
          children
        )}
      </AuthContextDispatch.Provider>
    </AuthContext.Provider>
  )
}

export const useSession = () => useContext(AuthContext)
export const useSessionDispatch = () => useContext(AuthContextDispatch)
