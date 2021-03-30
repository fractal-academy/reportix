import { Button, Form, message, Modal } from 'antd'
import { EditOutlined } from '@ant-design/icons'
import { ROUTES_PATHS } from 'constants/index'
import { Col } from '@qonsoll/react-design'
import Title from 'antd/lib/typography/Title'
import ProjectAdvancedForm from 'domains/Project/components/forms/ProjectAdvancedForm'
import { useState } from 'react'
import { addData, updateData } from 'services/Firestore'
import COLLECTIONS from 'constants/collection'
import moment from 'moment'
import { useParams } from 'react-router-dom'

const ProjectEdit = (props) => {
  const { projectData } = props
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [loading, setLoading] = useState(false)
  const [form] = Form.useForm()
  const { id } = useParams()
  const dateFormat = 'MMMM Do YYYY'

  const showModal = () => {
    setIsModalVisible(true)
    console.log(projectData?.id)
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
        start: moment(data.dateRange[0]).format(dateFormat),
        end: moment(data.dateRange[1]).format(dateFormat),
        users: data?.users,
        description: data.description
      })
    } catch (e) {
      message.error(e)
    }

    setIsModalVisible(false)
    form.resetFields()
  }

  return (
    <>
      <Button type="primary" icon={<EditOutlined />} onClick={showModal}>
        Edit
      </Button>
      <Modal
        title={<Title level={4}>Edit project</Title>}
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={[
          <Button onClick={handleCancel} type="primary" key={'cancel'}>
            Cancel
          </Button>,
          <Button onClick={() => form.submit()} type="primary" key={'create'}>
            Save changes
          </Button>
        ]}>
        <ProjectAdvancedForm form={form} onFinish={onProjectEdit} />
      </Modal>
    </>
  )
}

export default ProjectEdit
