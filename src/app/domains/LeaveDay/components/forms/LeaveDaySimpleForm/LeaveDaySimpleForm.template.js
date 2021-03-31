import { DatePicker, Form, Input } from 'antd'
import { Col, Row } from '@qonsoll/react-design'
import LeaveDaySingleSelect from 'domains/LeaveDay/components/select/LeaveDaySingleSelect'
import { style } from 'app/style'
const { RangePicker } = DatePicker

const LeaveDaySimpleForm = (props) => {
  const { onFinish, form, loading, onCalendarChange } = props
  const { RangePicker } = DatePicker
  const { onChange } = (date) => {
    return date
  }
  const dateFormat = 'YYYY/MM/DD'

  return (
    <Form onFinish={onFinish} form={form}>
      <Row h="center" mb={2}>
        <Col>
          <Row mb={2}>
            <Col>
              <Form.Item
                name="title"
                hasFeedback={loading}
                rules={[
                  {
                    required: true,
                    message: 'Choose leave day'
                  }
                ]}>
                <LeaveDaySingleSelect onChange={onChange} />
              </Form.Item>
            </Col>
          </Row>
          <Row mb={2}>
            <Col>
              <Form.Item
                name="description"
                hasFeedback={loading}
                rules={[
                  {
                    message: 'Type description'
                  }
                ]}>
                <Input allowClear placeholder="Leave day short description" />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col>
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
                  style={style.fullWidth}
                  locale=""
                  format={dateFormat}
                  onCalendarChange={onCalendarChange}
                />
              </Form.Item>
            </Col>
          </Row>
        </Col>
      </Row>
    </Form>
  )
}
export default LeaveDaySimpleForm
