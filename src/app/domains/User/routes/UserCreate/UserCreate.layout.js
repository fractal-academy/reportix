import { Button, Form, Input, message } from 'antd'
import { PhoneOutlined } from '@ant-design/icons'
import { Box, Col, Row } from '@qonsoll/react-design'
import { AvatarUploader } from 'app/components'
import { useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { updateData } from 'services/Firestore'
import COLLECTIONS from 'constants/collection'
import { ROUTES_PATHS } from 'constants/index'

const UserCreate = () => {
  // [ADDITIONAL_HOOKS]
  const [loading, setLoading] = useState(false)
  const [avatar, setAvatar] = useState()
  const history = useHistory()
  const { id } = useParams()

  const onFinish = async (data) => {
    data.avatar = avatar || ''
    setLoading(true)
    try {
      await updateData(COLLECTIONS.USERS, id, {
        firstName: data?.firstName,
        surname: data?.surname,
        phone: data?.phone,
        avatarURL: data?.avatar || '',
        isAuthorize: true
      })
      history.push(ROUTES_PATHS.CALENDAR_SHOW)
    } catch (e) {
      message.error(e.message)
    }
    setLoading(false)
  }
  //[TEMPLATE]
  return (
    <Box justifyContent="center" display="flex" flex={1} mt={4}>
      <Form onFinish={onFinish}>
        <Row noGutters>
          <Col>
            <Row noGutters h="center">
              <Col cw="auto">
                <Form.Item
                  name="avatar"
                  hasFeedback={!!loading}
                  style={{ margin: 0 }}>
                  <AvatarUploader
                    shape="user"
                    size="large"
                    onLoad={(loadedAvatar) => {
                      setAvatar(loadedAvatar)
                    }}
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row noGutters mb={3}>
              <Col mr={3}>
                <Form.Item
                  style={{ marginBottom: 0 }}
                  name="firstName"
                  hasFeedback={!!loading}
                  rules={[
                    {
                      required: true,
                      message: 'Please input your First name!'
                    }
                  ]}>
                  <Input placeholder="First name" />
                </Form.Item>
              </Col>
              <Col>
                <Form.Item
                  style={{ marginBottom: 0 }}
                  name="surname"
                  hasFeedback={!!loading}
                  rules={[
                    {
                      required: true,
                      message: 'Please input your surname!'
                    }
                  ]}>
                  <Input placeholder="Surname" />
                </Form.Item>
              </Col>
            </Row>
            <Row noGutters>
              <Col>
                <Form.Item
                  name="phone"
                  hasFeedback={loading}
                  rules={[
                    {
                      required: true,
                      message: 'Please input your phone!'
                    }
                  ]}>
                  <Input prefix={<PhoneOutlined />} placeholder="+380" />
                </Form.Item>
              </Col>
            </Row>
            <Box display="flex" justifyContent="flex-end">
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Save
                </Button>
              </Form.Item>
            </Box>
          </Col>
        </Row>
      </Form>
    </Box>
  )
}
export default UserCreate
