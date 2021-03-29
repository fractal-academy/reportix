import { Form, Input } from 'antd'
import { UserOutlined, PhoneOutlined } from '@ant-design/icons'
import { Col, Row } from '@qonsoll/react-design'

const UserSimpleForm = (props) => {
  const { onFinish, form, loading } = props
  return (
    <Form name="Create user" onFinish={onFinish} form={form}>
      <Row noGutters>
        <Col>
          <Row noGutters>
            <Col>
              <Form.Item
                name="firstName"
                hasFeedback={loading}
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
                hasFeedback={loading}
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
                rules={[
                  {
                    required: true,
                    message: 'Please input your phone!'
                  }
                ]}>
                <Input
                  hasFeedback={loading}
                  prefix={<PhoneOutlined />}
                  placeholder="+380"
                />
              </Form.Item>
            </Col>
          </Row>
        </Col>
      </Row>
    </Form>
  )
}
export default UserSimpleForm
