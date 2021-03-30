import { Button, dataPicker, Form, Input, message, Modal, Space } from 'antd'
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
import ProjectAdvancedForm from 'domains/Project/components/forms/ProjectAdvancedForm'
import moment from 'moment'

const ProjectAddEvent = () => {
  const currentUser = useSession()
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [loading, setLoading] = useState(false)
  const [form] = Form.useForm()
  const dateFormat = 'MMMM Do YYYY'

  const showModal = () => {
    setIsModalVisible(true)
  }

  const onProjectCreate = async (data) => {
    setLoading(true)

    try {
      await addData(COLLECTIONS.PROJECTS, {
        projectName: data?.projectName,
        start: moment(data?.dateRange[0]).format(dateFormat),
        end: moment(data?.dateRange[1]).format(dateFormat),
        users: data?.users,
        description: data?.description || ''
      })
    } catch (e) {
      message.error(e)
    }
    setLoading(false)
    setIsModalVisible(false)
    form.resetFields()
  }

  const handleCancel = () => {
    setIsModalVisible(false)
    form.resetFields()
  }

  return (
    <>
      <Button type="primary" onClick={showModal} key={'openModal'}>
        Create new project
      </Button>
      <Modal
        title={<Title level={4}>New Project creation</Title>}
        visible={isModalVisible}
        onCancel={handleCancel}
        destroyOnClose
        footer={[
          <Button onClick={handleCancel} key={'cancel'}>
            Cancel
          </Button>,
          <Button onClick={() => form.submit()} type="primary" key={'create'}>
            Create
          </Button>
        ]}>
        <ProjectAdvancedForm form={form} onFinish={onProjectCreate} />
        {/*test*/}
      </Modal>
    </>
  )
}

export default ProjectAddEvent
