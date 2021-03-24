import { Button, DatePicker, Form, Input, Modal, Space } from 'antd'
import { useState } from 'react'
import LeaveDaySimpleForm from 'app/domains/LeaveDay/components/forms/LeaveDaySimpleForm'
import Title from 'antd/lib/typography/Title'
import {
  COLOR_CALENDAR,
  COLOR_CALENDAR_VALUE
} from 'app/constants/leaveDayColorPalette'
import { LEAVE_DAY } from 'constants/leaveDay'

const CalendarAddEvent = () => {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [loading, setLoading] = useState(false)
  const [form] = Form.useForm()
  const showModal = () => {
    setIsModalVisible(true)
  }

  const onLeaveDayCreate = (date) => {
    setLoading(true)
    const color = { backgroundColor: '' }
    switch (date.title) {
      case LEAVE_DAY.SWAP_DAY:
        color.backgroundColor = COLOR_CALENDAR.GOLD.backgroundColor
        break
      case LEAVE_DAY.SICK_DAY:
        color.backgroundColor = COLOR_CALENDAR.VOLCANO.backgroundColor
        break
      case LEAVE_DAY.VACATION:
        color.backgroundColor = COLOR_CALENDAR.LIME.backgroundColor
        break
      case LEAVE_DAY.MONTH_REMOTE:
        color.backgroundColor = COLOR_CALENDAR.CYAN.backgroundColor
        break
      case LEAVE_DAY.WORK_FROM_HOME:
        color.backgroundColor = COLOR_CALENDAR.MAGENTA.backgroundColor
        break
      case LEAVE_DAY.DAY_OFF:
        color.backgroundColor = COLOR_CALENDAR.BLUE.backgroundColor
        break
    }

    const leaveDayRequest = {
      title: date?.title,
      start: new Date(date.dateRange[0]),
      end: new Date(date.dateRange[1]),
      backgroundColor: color.backgroundColor
    }
    console.log(leaveDayRequest)

    // console.log(date)
    // console.log('title:', date.title)
    // console.log('start day:', new Date(date.dateRange[0]))
    // console.log('end day:', new Date(date.dateRange[1]))

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
