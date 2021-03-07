import React, { useState, useEffect } from 'react'
import { fbAuth } from 'app/services/Firebase/firebase'

export const AuthContext = React.createContext()

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null)
  useEffect(() => console.log(currentUser), [currentUser])
  useEffect(() => {
    fbAuth.onAuthStateChanged(setCurrentUser)
  }, [])

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  )
}
