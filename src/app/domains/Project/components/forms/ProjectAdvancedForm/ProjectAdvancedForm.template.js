import { UserSelect } from 'domains/User/components/select'
import { DatePicker, Form, Input } from 'antd'
import LeaveDaySingleSelect from 'domains/LeaveDay/components/select/LeaveDaySingleSelect'

const ProjectAdvancedForm = (props) => {
  const { onFinish, form, loading, onCalendarChange } = props
  const { RangePicker } = DatePicker
  const dateFormat = 'YYYY/MM/DD'

  const onChange = (data) => {
    console.log(data)
  }

  return (
    <Form>
      <Form.Item>
        <Input placeholder="Type new project name" />
      </Form.Item>
      <Form.Item
        name="dateRange"
        hasFeedback={loading}
        rules={[
          {
            required: true,
            message: 'Select leave day duration'
          }
        ]}>
        <RangePicker
          locale=""
          format={dateFormat}
          onCalendarChange={onCalendarChange}
        />
      </Form.Item>
      <Form.Item>{/*<UserSelect onChange={onChange} />*/}</Form.Item>
    </Form>
  )
}
export default ProjectAdvancedForm
