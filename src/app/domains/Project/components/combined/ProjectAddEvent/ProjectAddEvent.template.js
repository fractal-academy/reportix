import { Button, DatePicker, Form, Input, message, Modal, Space } from 'antd'
import { useState } from 'react'
import LeaveDaySimpleForm from 'app/domains/LeaveDay/components/forms/LeaveDaySimpleForm'
import Title from 'antd/lib/typography/Title'
import {
  COLOR_CALENDAR,
  COLOR_CALENDAR_VALUE
} from 'app/constants/leaveDayColorPalette'
import { LEAVE_DAY } from 'constants/leaveDay'
import { addData, getCollectionRef, setData } from 'services/Firestore'
import COLLECTIONS from 'constants/collection'
import { useSession } from 'context/SesionContext'
import { useDocument, useDocumentData } from 'react-firebase-hooks/firestore'
import STATUS from 'constants/status'
import { UserSelect } from 'domains/User/components/select'
import ProjectAdvancedForm from 'domains/Project/components/forms/ProjectAdvancedForm'

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
  }
  return color.backgroundColor
}

const ProjectAddEvent = () => {
  const currentUser = useSession()
  const firstName = currentUser.firstName
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [loading, setLoading] = useState(false)
  const [form] = Form.useForm()

  const showModal = () => {
    setIsModalVisible(true)
  }

  const user = useSession()
  const [userData, isLoading] = useDocumentData(
    getCollectionRef(COLLECTIONS.PROJECTS).doc(user.uid),
    { idField: 'id' }
  )
  const name =
    userData?.firstName &&
    userData?.surname &&
    `${userData?.firstName} ${userData?.surname}`

  const onLeaveDayCreate = async (date) => {
    setLoading(true)
    const color = titleSwitch(date.title)
    console.log(typeof color)
    try {
      await addData(COLLECTIONS.PROJECTS, {
        title: `${date?.title}, ${name ? name : userData.email}`,
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
        title={<Title level={4}>New Project creation</Title>}
        visible={isModalVisible}
        onCancel={handleCancel}
        destroyOnClose
        footer={[
          <Button onClick={handleCancel} type="primary">
            Cancel
          </Button>,
          <Button onClick={() => form.submit()} type="primary">
            Create
          </Button>
        ]}>
        <ProjectAdvancedForm />
      </Modal>
    </>
  )
}

export default ProjectAddEvent
