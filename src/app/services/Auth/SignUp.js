import { useCallback } from 'react'
import { auth } from '../Firebase'
import { Button, Form, Input, message } from 'antd'
import { withRouter } from 'react-router-dom'
import Title from 'antd/es/typography/Title'
import { Container, Row, Col } from '@qonsoll/react-design'
import { COLLECTIONS, ROUTES_PATHS } from 'app/constants'
import moment from 'moment'
import { setData } from '../Firestore'

const SignUp = ({ history }) => {
  const handleSignUp = useCallback(
    async (event) => {
      const { email, password } = event
      try {
        const currentDate = moment().format('DD-MM-YYYY')
        const data = { email: email, employedDate: currentDate }
        await auth
          .createUserWithEmailAndPassword(email, password)
          .then((user) => {
            setData(COLLECTIONS.USERS, user.user.uid, data)
          })
        history.push('/')
      } catch (error) {
        console.error(error)
      }
    },
    [history]
  )

  const layout = {
    wrapperCol: {}
  }
  const tailLayout = {}

  const onFinishFailed = (errorInfo) => {
    message.error(errorInfo)
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
            onFinish={handleSignUp}
            onFinishFailed={onFinishFailed}>
            <Form.Item {...tailLayout}>
              <Title level={1}> Sign up</Title>
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
              <Input.Password placeholder="Type your password to Sign Up" />
            </Form.Item>

            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit">
                Sign Up
              </Button>
            </Form.Item>

            <Button
              onClick={() => {
                history.push(ROUTES_PATHS.LOGIN)
              }}>
              Already have an account? LogIn
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}
export default withRouter(SignUp)
