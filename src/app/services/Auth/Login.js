import { Button, Form, Input, message } from 'antd'
import { useCallback } from 'react'
import { generatePath, Redirect, withRouter } from 'react-router-dom'
import { auth } from '../Firebase'
import Title from 'antd/lib/typography/Title'
import { Row, Col, Box } from '@qonsoll/react-design'
import { ROUTES_PATHS } from 'app/constants'
import { useSession } from 'app/context/SesionContext'

const Login = ({ history }) => {
  const handleLogin = useCallback(
    async (event) => {
      const { email, password } = event
      try {
        await auth.signInWithEmailAndPassword(email, password)
      } catch (error) {
        message.error('User not exist. Sign up, please.')
      }
    },
    [history]
  )

  const currentUser = useSession()

  if (currentUser) {
    if (currentUser.isAuthorize)
      return <Redirect to={ROUTES_PATHS.CALENDAR_SHOW} />
    else {
      const id = currentUser.uid
      const userCreate = generatePath(ROUTES_PATHS.USER_CREATE, { id })
      history.push(userCreate)
    }
  }

  const layout = {
    labelCol: {},
    wrapperCol: {}
  }
  const tailLayout = {
    wrapperCol: {}
  }

  const onFinishFailed = (errorInfo) => {
    message.error('Failed:', errorInfo)
  }

  return (
    <Box bg="#272042" display="flex" height="inherit" flex={1}>
      <Box display="flex" flex={1} justifyContent="center" alignItems="center">
        <Box>
          <Box display="flex" justifyContent="center" mb={2}>
            <Title style={{ color: '#f6f6f6' }} level={2}>
              Report system
            </Title>
          </Box>
          <Row
            h="center"
            bg="#f6f6f6"
            borderRadius="12px"
            v="center"
            style={{ boxShadow: '0 20px 24px -24px rgba(0,0,0,1)' }}>
            <Col p={4}>
              <Form
                {...layout}
                name="basic"
                initialValues={{
                  remember: true
                }}
                onFinish={handleLogin}
                onFinishFailed={onFinishFailed}>
                <Box display="flex" flex={1} justifyContent="center" mb={3}>
                  <Title level={3}>Login</Title>
                </Box>

                <Form.Item
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
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your password!'
                    }
                  ]}>
                  <Input.Password placeholder="Type your password to Login" />
                </Form.Item>

                <Box display="flex" justifyContent="space-between">
                  <Form.Item {...tailLayout} style={{ marginBottom: 0 }}>
                    <Button
                      type="text"
                      onClick={() => {
                        history.push(ROUTES_PATHS.SIGN_UP)
                      }}>
                      Don't have an account yet? Sign Up
                    </Button>
                  </Form.Item>

                  <Form.Item {...tailLayout} style={{ marginBottom: 0 }}>
                    <Button type="primary" htmlType="submit">
                      Login
                    </Button>
                  </Form.Item>
                </Box>
              </Form>
            </Col>
          </Row>
        </Box>
      </Box>
    </Box>
  )
}

export default withRouter(Login)
