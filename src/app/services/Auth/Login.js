import { Button, Form, Input } from 'antd'
import { useCallback, useContext } from 'react'
import { Redirect, withRouter } from 'react-router-dom'
import { auth } from '../Firebase/firebase'
import { AuthContext } from './Auth'
import Title from 'antd/lib/typography/Title'
import { Container, Row, Col } from '@qonsoll/react-design'
import { useSession } from '../../context/SesionContext'

const Login = ({ history }) => {
  const { currentUser, setCurrentUser } = useSession()

  const handleLogin = useCallback(
    async (event) => {
      const { email, password } = event
      try {
        const user = await auth.signInWithEmailAndPassword(email, password)
        console.log(user, user.user.providerData[0])
        setCurrentUser(user.user.providerData[0].email)
        history.push('/')
      } catch (error) {
        console.log(error)
      }
    },
    [history]
  )

  if (currentUser) {
    return <Redirect to="/" />
  }

  const layout = {
    labelCol: {
      // span: 8
      //
    },
    wrapperCol: {
      // span: 10
    }
  }
  const tailLayout = {
    wrapperCol: {
      // offset: 8,
      // span: 16
    }
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <>
      <Container mt={4}>
        <Row noGutters h="center">
          <Col cw="6">
            <Form
              {...layout}
              name="basic"
              initialValues={{
                remember: true
              }}
              onFinish={handleLogin}
              onFinishFailed={onFinishFailed}>
              <Form.Item {...tailLayout}>
                <Title level={1}> Log in</Title>
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
                <Input.Password placeholder="Type your password to Login" />
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
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default withRouter(Login)
