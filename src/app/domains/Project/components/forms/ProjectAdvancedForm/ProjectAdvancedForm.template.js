import { UserSelect } from 'domains/User/components/select'
import { Form, Input, Typography } from 'antd'
import TextArea from 'antd/lib/input/TextArea'
import { Box } from '@qonsoll/react-design'

const ProjectAdvancedForm = (props) => {
  const { onFinish, form, projectData } = props

  return (
    <Form
      onFinish={onFinish}
      form={form}
      initialValues={
        projectData && {
          remember: true,
          projectName: projectData?.projectName,
          description: projectData?.description || '',
          users: projectData?.users
        }
      }>
      <Box mb={2}>
        <Typography.Text strong>Project name:</Typography.Text>
      </Box>
      <Form.Item
        name="projectName"
        rules={[
          {
            required: true,
            message: 'Enter project name'
          }
        ]}>
        <Input placeholder="Enter new project name" />
      </Form.Item>
      <Box mb={2}>
        <Typography.Text strong>Description:</Typography.Text>
      </Box>
      <Form.Item name="description">
        <TextArea
          autoSize={{ minRows: 4 }}
          maxLength={200}
          placeholder="General info: purpose, stack etc."
        />
      </Form.Item>
      <Box mb={2}>
        <Typography.Text strong>Employees:</Typography.Text>
      </Box>
      <Form.Item name="users" placeholder="">
        <UserSelect users={projectData?.users} />
      </Form.Item>
    </Form>
  )
}
export default ProjectAdvancedForm
