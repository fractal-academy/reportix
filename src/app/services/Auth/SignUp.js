import { useCallback } from 'react'
import { FIREBASE_CONFIG } from '../../constants'
import { auth } from '../Firebase/firebase'
import { Button, Card, Form, Input, Typography } from 'antd'
import { withRouter } from 'react-router-dom'
import Title from 'antd/es/typography/Title'

const SignUp = ({ history }) => {
  const handleSignUp = useCallback(
    async (event) => {
      // event.preventDefault()
      const { email, password } = event
      try {
        await auth.createUserWithEmailAndPassword(email, password)
        history.push('/')
      } catch (error) {
        alert(error)
      }
    },
    [history]
  )

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
      <Card size="default">
        <Form
          {...layout}
          name="basic"
          initialValues={{
            remember: true
          }}
          onFinish={handleSignUp}
          onFinishFailed={onFinishFailed}>
          <Form.Item {...tailLayout}>
            <Title level={6}> Sign up</Title>
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: 'Please input your username!'
              }
            ]}>
            <Input placeholder="Type your email to Sign Up" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              { required: true, message: 'Type your password to Sign Up' }
            ]}>
            <Input placeholder="Type your password to Sign Up" />
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary">Sign Up</Button>
          </Form.Item>

          <Button
            onClick={() => {
              history.push('/Login')
            }}>
            Already has an account? LogIn
          </Button>
        </Form>
      </Card>
    </>
  )
}
export default withRouter(SignUp)
