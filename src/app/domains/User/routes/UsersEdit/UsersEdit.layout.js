import { useState } from 'react'
import { Button, Modal, Typography, Form, message } from 'antd'
import { UserSimpleForm } from 'domains/User/components/forms'
import { EditOutlined } from '@ant-design/icons'
import { updateData } from 'services/Firestore'
import { useParams } from 'react-router-dom'
import COLLECTIONS from 'constants/collection'

message.config({ maxCount: 2 })

const { Title } = Typography
const UsersEdit = () => {
  const [visible, setVisible] = useState(false)
  const [loading, setLoading] = useState(false)
  const { id } = useParams()
  const [form] = Form.useForm()
  const handleCancel = () => {
    setVisible(false)
    setLoading(false)
    form.resetFields()
  }
  const onEditUser = async (data) => {
    console.log(data)
    setLoading(true)
    try {
      await updateData(COLLECTIONS.USERS, id, {
        firstName: data.firstName,
        surname: data.surname,
        phone: data.phone,
        photoURL: data?.photoURL[1]
      })
      setVisible(false)
      form.resetFields()
    } catch (e) {
      message.error("Can't find this email.")
    }

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
          <Button
            key="submit"
            type="primary"
            onClick={() => form.submit()}
            loading={loading}>
            Edit
          </Button>
        ]}>
        <UserSimpleForm onFinish={onEditUser} form={form} loading />
      </Modal>
    </>
  )
}
export default UsersEdit
