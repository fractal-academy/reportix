import { Form, Input } from 'antd'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import Title from 'antd/lib/typography/Title'

const UserSimpleForm = (props) => {
  const { onFinish, form, loading } = props
  return (
    <Form
      title={<Title level={4}>Create User</Title>}
      name="Create user"
      initialValues={{
        remember: true
      }}
      onFinish={onFinish}
      form={form}>
      <Form.Item
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your Email!'
          }
        ]}>
        <Input
          prefix={<UserOutlined />}
          placeholder="Email"
          defaultValue="@gmail.com"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!'
          }
        ]}>
        <Input
          hasFeedback={loading}
          prefix={<LockOutlined />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
    </Form>
  )
}
export default UserSimpleForm
