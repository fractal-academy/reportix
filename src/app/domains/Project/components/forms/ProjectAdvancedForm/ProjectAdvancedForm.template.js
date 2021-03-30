import { UserSelect } from 'domains/User/components/select'
import { DatePicker, Form, Input } from 'antd'
import moment from 'moment'
import TextArea from 'antd/lib/input/TextArea'

const ProjectAdvancedForm = (props) => {
  const { onFinish, form, loading, onCalendarChange, projectData } = props
  const { RangePicker } = DatePicker

  const dateFormat = 'YYYY/MM/DD'

  return (
    <Form
      onFinish={onFinish}
      form={form}
      initialValues={
        projectData && {
          remember: true,
          projectName: projectData?.projectName,
          description: projectData?.description || '',
          dateRange: [
            moment(projectData?.start, 'MMMM Do YYYY'),
            moment(projectData?.end, 'MMMM Do YYYY')
          ],
          users: projectData?.users
        }
      }>
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
      <Form.Item
        name="description"
        rules={[
          {
            required: false,
            message: 'General project description'
          }
        ]}>
        <TextArea
          maxLength={200}
          placeholder="General info: purpose, stack etc."
        />
      </Form.Item>
      <Form.Item
        name="dateRange"
        hasFeedback={loading}
        rules={[
          {
            required: true,
            message: 'Select project timelines'
          }
        ]}>
        <RangePicker
          locale=""
          format={dateFormat}
          onCalendarChange={onCalendarChange}
        />
      </Form.Item>
      <Form.Item
        name="users"
        placeholder=""
        rules={[
          {
            required: true,
            message: 'Select project team'
          }
        ]}>
        <UserSelect users={projectData?.users} />
      </Form.Item>
    </Form>
  )
}
export default ProjectAdvancedForm
