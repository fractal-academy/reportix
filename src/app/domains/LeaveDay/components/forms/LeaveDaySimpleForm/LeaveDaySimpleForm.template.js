import { DatePicker, Form, Input, Space } from 'antd'
import { Col, Row } from '@qonsoll/react-design'
import LeaveDaySingleSelect from 'domains/LeaveDay/components/select/LeaveDaySingleSelect'
import moment from 'moment'
import Title from 'antd/lib/typography/Title'

const LeaveDaySimpleForm = (props) => {
  const { onFinish, form, loading, onCalendarChange } = props
  const { RangePicker } = DatePicker
  const { onChange } = (date) => {
    return
  }
  const dateFormat = 'YYYY/MM/DD'
  const date = moment(new Date()).format(dateFormat)

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
