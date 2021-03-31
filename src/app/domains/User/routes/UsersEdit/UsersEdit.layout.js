import { useState } from 'react'
import { Button, Modal, Typography, Form, message } from 'antd'
import { UserSimpleForm } from 'domains/User/components/forms'
import { EditOutlined } from '@ant-design/icons'
import { getCollectionRef, updateData } from 'services/Firestore'
import { useParams } from 'react-router-dom'
import COLLECTIONS from 'constants/collection'
import { useDocumentData } from 'react-firebase-hooks/firestore'

message.config({ maxCount: 2 })

const { Title } = Typography

const UsersEdit = () => {
  // [STATE]
  const [visible, setVisible] = useState(false)
  const [loading, setLoading] = useState(false)
  // [ADDITIONAL_HOOKS]
  const { id } = useParams()
  const [form] = Form.useForm()
  const [userData] = useDocumentData(
    getCollectionRef(COLLECTIONS.USERS).doc(id),
    { idField: 'id' }
  )

  //[HELPER_FUNCTIONS]
  const handleCancel = () => {
    setVisible(false)
    setLoading(false)
    form.resetFields()
  }
  const onEditUser = async (data) => {
    setLoading(true)
    console.log(data)
    try {
      await updateData(COLLECTIONS.USERS, id, {
        firstName: data?.firstName,
        surname: data?.surname,
        phone: data?.phone,
        avatarURL: data?.avatar || ''
      })
    } catch (e) {
      message.error(e)
    }
    form.resetFields()
    setLoading(false)
    setVisible(false)
  }

  return (
    <>
      <Button
        size="large"
        type="text"
        onClick={() => {
          setVisible(true)
        }}
        icon={<EditOutlined />}
      />
      <Modal
        visible={visible}
        title={<Title level={4}>Edit profile</Title>}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button
            key="submit"
            type="primary"
            onClick={() => {
              form.submit()
            }}
            loading={loading}>
            Save
          </Button>
        ]}>
        <UserSimpleForm
          onFinish={onEditUser}
          form={form}
          loading
          user={userData}
        />
      </Modal>
    </>
  )
}
export default UsersEdit
