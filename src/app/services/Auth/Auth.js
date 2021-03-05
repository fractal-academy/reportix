import React, { useState, useEffect } from 'react'
import { auth } from 'app/services/Firebase/firebase'
import { FIREBASE_CONFIG } from '../../constants'

export const AuthContext = React.createContext()

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    auth.onAuthStateChanged(setCurrentUser)
  }, [])
  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  )
}
