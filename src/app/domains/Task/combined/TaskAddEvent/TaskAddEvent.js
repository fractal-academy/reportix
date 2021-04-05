import { AppstoreAddOutlined } from '@ant-design/icons'
import { Button, Form, message, Modal } from 'antd'
import { useState } from 'react'
import Title from 'antd/lib/typography/Title'
import LeaveDaySimpleForm from 'domains/LeaveDay/components/forms/LeaveDaySimpleForm'
import TaskSimpleForm from 'domains/Task/forms/TaskSimpleForm'
import { addData } from 'services/Firestore'
import COLLECTIONS from 'constants/collection'
import { LEAVE_DAY } from 'constants/leaveDay'
import STATUS from 'constants/status'

const TaskAddEvent = () => {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [loading, setLoading] = useState(false)
  const [form] = Form.useForm()

  const onTaskCreate = (data) => {
    setLoading(true)
    try {
      console.log('1')
    } catch (e) {
      message.error("Can't create Event")
    }
    setLoading(false)
    setIsModalVisible(false)
    form.resetFields()
  }

  const showModal = () => {
    setIsModalVisible(true)
  }
  const handleCancel = () => {
    setIsModalVisible(false)
    form.resetFields()
  }

  return (
    <>
      <Button type="primary" onClick={showModal} icon={<AppstoreAddOutlined />}>
        Add task
      </Button>
      <Modal
        width={800}
        title={<Title level={4}>Add new task</Title>}
        visible={isModalVisible}
        onCancel={handleCancel}
        destroyOnClose
        footer={[
          <Button key="back" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button
            key="submit"
            loading={loading}
            onClick={() => {
              form.submit()
            }}
            type="primary">
            Save
          </Button>
        ]}>
        <TaskSimpleForm form={form} onFinish={onTaskCreate} loading />
      </Modal>
    </>
  )
}
export default TaskAddEvent
