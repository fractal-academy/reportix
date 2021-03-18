import React, { useState, useEffect, useContext } from 'react'
import { auth } from 'app/services/Firebase/firebase'
import { Spin } from 'antd'
import { Row, Col } from '@qonsoll/react-design'

export const AuthContext = React.createContext()
export const useSession = () => useContext(AuthContext)

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setLoading(true)
    auth.onAuthStateChanged((user) => {
      setCurrentUser(user)
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
