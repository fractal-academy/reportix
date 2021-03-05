import { Button, Form, Typography, Input, Checkbox } from 'antd'
import { useCallback, useContext, useEffect, useState } from 'react'

import { Redirect, withRouter } from 'react-router-dom'
import { auth } from '../Firebase/firebase'
import { AuthContext } from './Auth'
import SignUp from './SignUp'
import Title from 'antd/lib/typography/Title'

const Login = ({ history }) => {
  const handleLogin = useCallback(
    // const onFinish = useCallback(
    async (event) => {
      // event.preventDefault()
      const { email, password } = event
      try {
        await auth.signInWithEmailAndPassword(email, password)
        history.push('/')
      } catch (error) {
        {
          alert(error)
        }
      }
    },
    [history]
  )
  const { currentUser } = useContext(AuthContext)

  if (currentUser) {
    return <Redirect to="/" />
  }

  const layout = {
    labelCol: {
      span: 6
    },
    wrapperCol: {
      span: 10
    }
  }
  const tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 16
    }
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <>
      <Form
        {...layout}
        name="basic"
        initialValues={{
          remember: true
        }}
        onFinish={handleLogin}
        onFinishFailed={onFinishFailed}>
        <Form.Item {...tailLayout}>
          <Title level={6}> Log in</Title>
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: 'Please input your email to Login!'
            }
          ]}>
          <Input placeholder="Input your email to Login" />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!'
            }
          ]}>
          <Input placeholder="Type your password to Login" />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            LOG IN
          </Button>
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button
            onClick={() => {
              history.push('/SignUp')
            }}>
            Dont have an account yet? Sign Up
          </Button>
        </Form.Item>
      </Form>
      {/*<Form onSubmit={handleLogin}>*/}
      {/*  <label>*/}
      {/*    Email*/}
      {/*    <input name="email" type="email" placeholder="Email" />*/}
      {/*  </label>*/}
      {/*  <label>*/}
      {/*    Password*/}
      {/*    <input name="password" type="password" placeholder="Password" />*/}
      {/*  </label>*/}
      {/*  <button type="submit">Log In</button>*/}
      {/*</Form>*/}
    </>
  )
}

export default withRouter(Login)

// const Login = (props) => {
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')
//   const [emailError, setEmailError] = useState('')
//   const [passwordError, setPasswordError] = useState('')
//   // const [user, setUser] = useState('')
//
//   const [hasAccount, setHasAccount] = useState(false)
//
//   const clearInput = () => {
//     setEmail('')
//     setPassword('')
//   }
//
//   const clearErrors = () => {
//     setEmailError('')
//     setPasswordError('')
//   }
//
//   const handleLogin = useCallback(async () => {
//     //add flag for correct login
//     sessionStorage.setItem('loggedIn', 'true')
//     await auth.signInWithEmailAndPassword(email, password).catch((err) => {
//       switch (err.code) {
//         case 'auth/invalid-email':
//         case 'auth/user-disabled':
//         case 'auth/user-not-fount':
//           setEmailError(err.message)
//           break
//         case 'auth/wrong-password':
//           setPasswordError(err.message)
//           break
//       }
//     })
//   }, [])

// const handleSignUp = useCallback(async () => {
//   auth.createUserWithEmailAndPassword(email, password).catch((err) => {
//     switch (err.code) {
//       case 'auth/email-already-in-use':
//       case 'auth/invalid-email':
//         setEmailError(err.message)
//         break
//       case 'auth/weak-password':
//         setPasswordError(err.message)
//         break
//     }
//   })
// }, [])

//   return (
//       <section className="login">
//         <div className="login">
//           <label>Username</label>
//           <input
//               type="text"
//               autoFocus
//               required
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//           />
//           <div className="errorMsg">{emailError}</div>
//           <label>Password</label>
//           <input
//               type="password"
//               required
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//           />
//           <div className="errorMsg">{passwordError}</div>
//           <Card>
//             {hasAccount ? (
//                 <>
//                   <Button onClick={handleLogin}>Sign in</Button>
//                   <Typography>
//                     Dont have an account?
//                     <span onClick={() => setHasAccount(!hasAccount)}>Sign up</span>
//                   </Typography>
//                 </>
//             ) : (
//                 <>
//                   <Button onClick={handleSignUp}>Sign Up</Button>
//                   <Typography>
//                     Have an account?
//                     <span onClick={() => setHasAccount(!hasAccount)}>Sign in</span>
//                   </Typography>
//                 </>
//             )}
//           </Card>
//         </div>
//       </section>
//   )
// }
//
// export default Login
