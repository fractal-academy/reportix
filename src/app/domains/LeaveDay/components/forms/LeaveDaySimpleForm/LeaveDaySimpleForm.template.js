import { DatePicker, Form, Input } from 'antd'
import { Col, Row } from '@qonsoll/react-design'
import LeaveDaySingleSelect from 'domains/LeaveDay/components/select/LeaveDaySingleSelect'
import { style } from 'app/style'

const LeaveDaySimpleForm = (props) => {
  const { onFinish, form, onCalendarChange } = props
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
                rules={[
                  {
                    required: true
                  }
                ]}>
                <LeaveDaySingleSelect onChange={onChange} />
              </Form.Item>
            </Col>
          </Row>
          <Row mb={2}>
            <Col>
              <Form.Item name="description">
                <Input allowClear placeholder="Leave day short description" />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Item
                name="dateRange"
                rules={[
                  {
                    required: true
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
