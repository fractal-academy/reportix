import { Button, Form, message, Modal } from 'antd'
import { useState } from 'react'
import Title from 'antd/lib/typography/Title'
import { addData } from 'services/Firestore'
import COLLECTIONS from 'constants/collection'
import ProjectAdvancedForm from 'domains/Project/components/forms/ProjectAdvancedForm'
import { useSession } from 'context/SesionContext'

const ProjectAddEvent = () => {
  const user = useSession()
  const users = []
  users.push(user.uid)
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [loading, setLoading] = useState(false)
  const [form] = Form.useForm()

  const showModal = () => {
    setIsModalVisible(true)
  }

  const onProjectCreate = async (data) => {
    setLoading(true)

    try {
      await addData(COLLECTIONS.PROJECTS, {
        projectName: data?.projectName,
        users: data?.users || [],
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
        title={<Title level={4}>Create project</Title>}
        visible={isModalVisible}
        onCancel={handleCancel}
        destroyOnClose
        footer={[
          <Button onClick={handleCancel} key={'cancel'}>
            Cancel
          </Button>,
          <Button
            onClick={() => form.submit()}
            type="primary"
            key={'create'}
            loading={loading}>
            Save
          </Button>
        ]}>
        <ProjectAdvancedForm
          form={form}
          onFinish={onProjectCreate}
          projectData={{ users: users }}
        />
      </Modal>
    </>
  )
}

export default ProjectAddEvent
