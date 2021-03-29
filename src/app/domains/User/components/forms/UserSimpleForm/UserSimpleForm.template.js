import { Form, Input } from 'antd'
import { UserOutlined, PhoneOutlined } from '@ant-design/icons'
import { Col, Row } from '@qonsoll/react-design'
import { ImageUploader } from 'app/components'

const UserSimpleForm = (props) => {
  const { onFinish, form, loading, user } = props
  return (
    <Form
      name="Create user"
      initialValues={{
        remember: true,
        avatar: user?.avatarURL,
        firstName: user?.firstName,
        surname: user?.surname,
        phone: user?.phone
      }}
      onFinish={onFinish}
      form={form}>
      <Row noGutters>
        <Col>
          <Row noGutters h="center">
            <Col cw="auto">
              <Form.Item name="avatar" hasFeedback={!!loading}>
                <ImageUploader
                  shape="user"
                  src={user?.avatarURL}
                  collection="users"
                  itemId={user?.id}
                  size={130}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row noGutters>
            <Col>
              <Form.Item
                name="firstName"
                hasFeedback={!!loading}
                rules={[
                  {
                    required: true,
                    message: 'Please input your First name!'
                  }
                ]}>
                <Input prefix={<UserOutlined />} placeholder="First name" />
              </Form.Item>
            </Col>
            <Col>
              <Form.Item
                name="surname"
                hasFeedback={!!loading}
                rules={[
                  {
                    required: true,
                    message: 'Please input your surname!'
                  }
                ]}>
                <Input prefix={<UserOutlined />} placeholder="Surname" />
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
        </Col>
      </Row>
    </Form>
  )
}
export default UserSimpleForm
