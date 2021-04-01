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

  const onLeaveDayCreate = async (data) => {
    setLoading(true)
    const color = titleSwitch(data.title)
    try {
      await addData(COLLECTIONS.LEAVE_DAYS, {
        title: name ? name : user.email,
        leaveDayType: data?.title,
        start: new Date(data?.dateStart),
        end: new Date(data?.dateEnd),
        backgroundColor: color,
        borderColor: color,
        userId: user.uid,
        status:
          data?.title === LEAVE_DAY.SICK_DAY ? STATUS.APPROVED : STATUS.PENDING,
        description: data.description || ''
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
        Create
      </Button>
      <Modal
        title={<Title level={4}>Create leave day</Title>}
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
        <LeaveDaySimpleForm form={form} onFinish={onLeaveDayCreate} loading />
      </Modal>
    </>
  )
}

export default CalendarAddEvent
