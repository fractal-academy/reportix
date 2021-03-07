import { useCallback } from 'react'
import { auth } from '../Firebase/firebase'
import { Button, Form, Input } from 'antd'
import { withRouter } from 'react-router-dom'
import Title from 'antd/es/typography/Title'
import { Container, Row, Col } from '@qonsoll/react-design'

const SignUp = ({ history }) => {
  const handleSignUp = useCallback(
    async (event) => {
      const { email, password } = event
      try {
        await auth.createUserWithEmailAndPassword(email, password)
        history.push('/')
      } catch (error) {
        console.log(error)
      }
    },
    [history]
  )

  const layout = {
    // labelCol: {
    //   span: 6
    // },
    wrapperCol: {
      // span: 10
    }
  }
  const tailLayout = {
    // wrapperCol: {
    //   offset: 8,
    //   span: 16
    // }
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
              <Button type="primary">Sign Up</Button>
            </Form.Item>

            <Button
              onClick={() => {
                history.push('/Login')
              }}>
              Already has an account? LogIn
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}
export default withRouter(SignUp)
