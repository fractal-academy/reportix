import { Button, Form, Input } from 'antd'
import { useCallback } from 'react'
import { Redirect, withRouter } from 'react-router-dom'
import { auth } from '../Firebase'
import Title from 'antd/lib/typography/Title'
import { Container, Row, Col } from '@qonsoll/react-design'
import { ROUTES_PATHS } from 'app/constants'
import { useSession } from 'app/context/SesionContext'

const Login = ({ history }) => {
  const handleLogin = useCallback(
    async (event) => {
      const { email, password } = event
      try {
        await auth.signInWithEmailAndPassword(email, password)
        history.push(ROUTES_PATHS.DASHBOARD)
      } catch (error) {
        console.error(error)
      }
    },
    [history]
  )

  const currentUser = useSession()
  console.log(currentUser)

  if (currentUser) {
    return <Redirect to={ROUTES_PATHS.DASHBOARD} />
  }

  const layout = {
    labelCol: {},
    wrapperCol: {}
  }
  const tailLayout = {
    wrapperCol: {}
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  return (
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
                  history.push(ROUTES_PATHS.SIGN_UP)
                }}>
                Don't have an account yet? Sign Up
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default withRouter(Login)
