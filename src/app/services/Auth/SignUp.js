import { useCallback, useState } from 'react'
import { auth } from '../Firebase'
import { Button, Form, Input, message } from 'antd'
import { generatePath, withRouter } from 'react-router-dom'
import Title from 'antd/es/typography/Title'
import { Box, Row, Col } from '@qonsoll/react-design'
import { COLLECTIONS, ROUTES_PATHS } from 'app/constants'
import moment from 'moment'
import { setData } from '../Firestore'

const SignUp = ({ history }) => {
  const handleSignUp = useCallback(
    async (event) => {
      const { email, password } = event
      try {
        const currentDate = moment().format('DD-MM-YYYY')
        const data = {
          email: email,
          employedDate: currentDate,
          Company: 'Senseteq',
          isAuthorize: false,
          isAdmin: false
        }
        const user = await auth.createUserWithEmailAndPassword(email, password)
        await setData(COLLECTIONS.USERS, user.user.uid, data)
        const id = user.user.uid
        const userCreate = generatePath(ROUTES_PATHS.USER_CREATE, { id })
        history.push(userCreate)
      } catch (error) {
        message.error(error.message)
      }
    },
    [history]
  )

  const layout = {
    wrapperCol: {}
  }
  const tailLayout = {}

  const onFinishFailed = (errorInfo) => {
    console.log(errorInfo)
  }

  return (
    <Box bg="#272042" display="flex" height="inherit" flex={1}>
      <Box display="flex" flex={1} justifyContent="center" alignItems="center">
        <Box>
          <Box display="flex" justifyContent="center" mb={2}>
            <Title style={{ color: '#f6f6f6' }} level={2}>
              Report helper / Vacation system
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
                onFinish={handleSignUp}
                onFinishFailed={onFinishFailed}>
                <Box display="flex" justifyContent="center" mb={3}>
                  <Title level={3}>Sign up</Title>
                </Box>

                <Form.Item
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
                  name="password"
                  rules={[
                    { required: true, message: 'Type your password to Sign Up' }
                  ]}>
                  <Input.Password placeholder="Type your password to Sign Up" />
                </Form.Item>
                <Box display="flex" justifyContent="space-between">
                  <Form.Item {...tailLayout} style={{ marginBottom: 0 }}>
                    <Button
                      type="text"
                      onClick={() => {
                        history.push(ROUTES_PATHS.LOGIN)
                      }}>
                      Already have an account? LogIn
                    </Button>
                  </Form.Item>
                  <Form.Item {...tailLayout} style={{ marginBottom: 0 }}>
                    <Button type="primary" htmlType="submit">
                      Sign up
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
export default withRouter(SignUp)
