import { UserSelect } from 'domains/User/components/select'
import { DatePicker, Form, Input } from 'antd'
import moment from 'moment'
import TextArea from 'antd/lib/input/TextArea'

const ProjectAdvancedForm = (props) => {
  const { onFinish, form, loading, onCalendarChange, project } = props
  const { RangePicker } = DatePicker

  const dateFormat = 'YYYY/MM/DD'
  const date = moment(new Date()).format(dateFormat)

  return (
    <Form
      onFinish={onFinish}
      form={form}
      initialValues={{
        remember: true,
        projectName: project?.projectName,
        description: project?.description,
        dateRange: [project?.start, project?.end],
        users: project?.users
      }}>
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
        <UserSelect />
      </Form.Item>
    </Form>
  )
}
export default ProjectAdvancedForm
