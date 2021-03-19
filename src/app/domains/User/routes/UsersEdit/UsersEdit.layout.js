import { useState } from 'react'
import { Button, Modal, Typography, Form, message } from 'antd'
import { UserSimpleForm } from 'domains/User/components/forms'
import { EditOutlined } from '@ant-design/icons'

message.config({ maxCount: 2 })

const { Title } = Typography
const UsersEdit = () => {
  const [visible, setVisible] = useState(false)
  const [loading, setLoading] = useState(false)
  const [form] = Form.useForm()
  const handleCancel = () => {
    setVisible(false)
    setLoading(false)
    form.resetFields()
  }
  const onEditUser = async (value) => {
    console.log(value)
    setLoading(true)
    // try {
    //   await auth.sendPasswordResetEmail(value.email)
    //   setVisible(false)
    //   form.resetFields()
    // } catch (e) {
    //   message.error("Can't find this email.")
    // }

    setLoading(false)
    setVisible(false)
  }

  return (
    <>
      <Button
        type="primary"
        onClick={() => setVisible(true)}
        icon={<EditOutlined />}>
        Edit
      </Button>
      <Modal
        visible={visible}
        title={<Title level={4}>Edit user</Title>}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button key="submit" type="primary" onClick={() => form.submit()}>
            Edit
          </Button>
        ]}>
        <UserSimpleForm onFinish={onEditUser} form={form} loading />
      </Modal>
    </>
  )
}
export default UsersEdit
