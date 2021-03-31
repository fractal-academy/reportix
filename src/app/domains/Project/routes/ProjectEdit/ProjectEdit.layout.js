import { Button, Form, message, Modal } from 'antd'
import { EditOutlined } from '@ant-design/icons'
import { useState } from 'react'
import { updateData } from 'services/Firestore'
import COLLECTIONS from 'constants/collection'
import Title from 'antd/lib/typography/Title'
import ProjectAdvancedForm from 'domains/Project/components/forms/ProjectAdvancedForm'

const ProjectEdit = (props) => {
  const { projectData } = props

  // [STATE]
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [loading, setLoading] = useState(false)
  // [ADDITIONAL_HOOKS]

  const [form] = Form.useForm()

  // [HELPER_FUNCTIONS]

  const showModal = () => {
    setIsModalVisible(true)
  }

  const handleCancel = () => {
    setLoading(false)
    setIsModalVisible(false)

    form.resetFields()
  }
  const onProjectEdit = async (data) => {
    setLoading(true)

    try {
      await updateData(COLLECTIONS.PROJECTS, projectData?.id, {
        projectName: data?.projectName,
        users: data?.users || [],
        description: data?.description || ''
      })
    } catch (e) {
      message.error(e)
    }

    form.resetFields()
    setLoading(false)
    setIsModalVisible(false)
  }

  return (
    <>
      <Button icon={<EditOutlined />} onClick={showModal} key={'showModal'} />

      <Modal
        title={<Title level={4}>Edit project</Title>}
        visible={isModalVisible}
        onCancel={handleCancel}
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
          onFinish={onProjectEdit}
          projectData={projectData}
        />
      </Modal>
    </>
  )
}

export default ProjectEdit
