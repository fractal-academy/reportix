import React, { useState, useEffect, useContext } from 'react'
import { auth } from 'app/services/Firebase'
import { Spin } from 'antd'
import { Row, Col } from '@qonsoll/react-design'
import { useDocumentDataOnce } from 'react-firebase-hooks/firestore'
import { firestore, getCollectionRef } from 'services/Firestore'
import { COLLECTIONS } from 'app/constants'

export const AuthContext = React.createContext()
export const useSession = () => useContext(AuthContext)

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setLoading(true)
    auth.onAuthStateChanged(async (user) => {
      const userData =
        user &&
        (await getCollectionRef(COLLECTIONS.USERS).doc(user.uid).get()).data()
      const contextData = userData
        ? { id: user && user.uid, ...userData }
        : user
      setCurrentUser(contextData)
      setLoading(false)
    })
  }, [])

  return (
    <AuthContext.Provider value={currentUser}>
      {loading ? (
        <Row v="center" h="center" height="100vh">
          <Col cw="auto">
            <Spin size="large" />
          </Col>
        </Row>
      ) : (
        children
      )}
    </AuthContext.Provider>
  )
}
