import { Button, DatePicker, Form, Input, Modal, Space } from 'antd'
import { useState } from 'react'
import { Box, Col, Row } from '@qonsoll/react-design'
import LeaveDaySingleSelect from 'domains/LeaveDay/components/select/LeaveDaySingleSelect'
import moment from 'moment'
import LeaveDaySimpleForm from 'app/domains/LeaveDay/components/forms/LeaveDaySimpleForm'
import Title from 'antd/lib/typography/Title'

const CalendarAddEvent = () => {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [loading, setLoading] = useState(false)
  const [form] = Form.useForm()
  const showModal = () => {
    setIsModalVisible(true)
  }

  const onLeaveDayCreate = (date) => {
    setLoading(true)
    console.log(date)
    setIsModalVisible(false)
    form.resetFields()
  }

  const handleCancel = () => {
    setIsModalVisible(false)
    form.resetFields()
  }

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Add Leave Day
      </Button>
      <Modal
        title={<Title level={4}>New LeaveDay request</Title>}
        visible={isModalVisible}
        destroyOnClose
        footer={[
          <Button onClick={handleCancel} type="primary">
            Cancel
          </Button>,
          <Button onClick={() => form.submit()} type="primary">
            Create
          </Button>
        ]}>
        <LeaveDaySimpleForm form={form} onFinish={onLeaveDayCreate} />
      </Modal>
    </>
  )
}

export default CalendarAddEvent
