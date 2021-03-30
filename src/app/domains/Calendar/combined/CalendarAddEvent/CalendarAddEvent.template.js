import { Button, Form, message, Modal } from 'antd'
import { useState } from 'react'
import LeaveDaySimpleForm from 'app/domains/LeaveDay/components/forms/LeaveDaySimpleForm'
import Title from 'antd/lib/typography/Title'
import { COLOR_CALENDAR } from 'app/constants/leaveDayColorPalette'
import { LEAVE_DAY } from 'constants/leaveDay'
import { addData } from 'services/Firestore'
import COLLECTIONS from 'constants/collection'
import { useSession } from 'context/SesionContext'
import STATUS from 'constants/status'
import { AppstoreAddOutlined } from '@ant-design/icons'

const titleSwitch = (title) => {
  const color = { backgroundColor: '' }
  switch (title) {
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
    default:
      break
  }
  return color.backgroundColor
}

const CalendarAddEvent = () => {
  const user = useSession()
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [loading, setLoading] = useState(false)
  const [form] = Form.useForm()
  const name =
    user?.firstName && user?.surname && `${user?.firstName} ${user?.surname}`

  const onLeaveDayCreate = async (date) => {
    setLoading(true)
    const color = titleSwitch(date.title)
    try {
      await addData(COLLECTIONS.LEAVE_DAYS, {
        title: `${date?.title}, ${name ? name : user.email}`,
        start: new Date(date.dateRange[0]),
        end: new Date(date.dateRange[1]),
        backgroundColor: color,
        userId: user.uid,
        status: STATUS.PENDING,
        description: date.description
      })
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
        Add Leave Day
      </Button>
      <Modal
        title={<Title level={4}>New LeaveDay request</Title>}
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
            onClick={() => form.submit()}
            type="primary">
            Create
          </Button>
        ]}>
        <LeaveDaySimpleForm form={form} onFinish={onLeaveDayCreate} loading />
      </Modal>
    </>
  )
}

export default CalendarAddEvent
