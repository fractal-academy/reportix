import React, { useState, useEffect, useContext } from 'react'
import { auth } from 'app/services/Firebase/firebase'

export const AuthContext = React.createContext()
export const useSession = () => useContext(AuthContext)

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
