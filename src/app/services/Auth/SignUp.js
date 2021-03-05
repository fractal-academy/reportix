import { useCallback } from 'react'
import { FIREBASE_CONFIG } from '../../constants'
import { auth } from '../Firebase/firebase'
import { Button, Typography } from 'antd'
import { withRouter } from 'react-router-dom'

const SignUp = ({ history }) => {
  const handleSignUp = useCallback(
    async (event) => {
      event.preventDefault()
      const { email, password } = event.target.elements
      try {
        await auth.createUserWithEmailAndPassword(email.value, password.value)
        history.push('/')
      } catch (error) {
        alert(error)
      }
    },
    [history]
  )

  return (
    <>
      <Typography> Sigh up</Typography>
      <form onSubmit={handleSignUp}>
        <label>
          Email
          <input name="email" type="email" placeholder="Email" />
        </label>
        <label>
          Password
          <input name="password" type="password" placeholder="Password" />
        </label>
        <button type="submit">Sign Up</button>
      </form>
      <Button
        onClick={() => {
          history.push('/Login')
        }}>
        Already has an account? LogIn
      </Button>
    </>
  )
}
export default withRouter(SignUp)
