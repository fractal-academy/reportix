import { Card } from 'antd'
import { Button, Typography } from 'antd'
import { useCallback, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { auth } from '../services/Firebase/firebase'
import { useSession } from '../context/SesionContext'

const Login = (props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  // const [user, setUser] = useState('')

  const [hasAccount, setHasAccount] = useState(false)

  const clearInput = () => {
    setEmail('')
    setPassword('')
  }

  const clearErrors = () => {
    setEmailError('')
    setPasswordError('')
  }

  const handleLogin = useCallback(async () => {
    //add flag for correct login
    sessionStorage.setItem('loggedIn', 'true')
    await auth.signInWithEmailAndPassword(email, password).catch((err) => {
      switch (err.code) {
        case 'auth/invalid-email':
        case 'auth/user-disabled':
        case 'auth/user-not-fount':
          setEmailError(err.message)
          break
        case 'auth/wrong-password':
          setPasswordError(err.message)
          break
      }
    })
  }, [])

  const handleSignUp = useCallback(async () => {
    auth.createUserWithEmailAndPassword(email, password).catch((err) => {
      switch (err.code) {
        case 'auth/email-already-in-use':
        case 'auth/invalid-email':
          setEmailError(err.message)
          break
        case 'auth/weak-password':
          setPasswordError(err.message)
          break
      }
    })
  }, [])

  return (
    <section className="login">
      <div className="login">
        <label>Username</label>
        <input
          type="text"
          autoFocus
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className="errorMsg">{emailError}</div>
        <label>Password</label>
        <input
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="errorMsg">{passwordError}</div>
        <Card>
          {hasAccount ? (
            <>
              <Button onClick={handleLogin}>Sign in</Button>
              <Typography>
                Dont have an account?
                <span onClick={() => setHasAccount(!hasAccount)}>Sign up</span>
              </Typography>
            </>
          ) : (
            <>
              <Button onClick={handleSignUp}>Sign Up</Button>
              <Typography>
                Have an account?
                <span onClick={() => setHasAccount(!hasAccount)}>Sign in</span>
              </Typography>
            </>
          )}
        </Card>
      </div>
    </section>
  )
}

export default Login
