import { DatePicker, Form, Input, Space } from 'antd'
import { Col, Row } from '@qonsoll/react-design'
import LeaveDaySingleSelect from 'domains/LeaveDay/components/select/LeaveDaySingleSelect'
import moment from 'moment'
import Title from 'antd/lib/typography/Title'

const LeaveDaySimpleForm = (props) => {
  const { onFinish, form, loading } = props

  const { RangePicker } = DatePicker
  const dateFormat = 'YYYY/MM/DD'
  const date = moment(new Date()).format(dateFormat)

  return (
    <Form onFinish={onFinish} form={form}>
      <Row h="center" noGutters mb={2}>
        <Col>
          <Row noGutters mb={2}>
            <Form.Item
              name="leaveDayType"
              hasFeedback={loading}
              rules={[
                {
                  required: true,
                  message: 'Choose leave day'
                }
              ]}>
              <LeaveDaySingleSelect />
            </Form.Item>
          </Row>
          <Row noGutters mb={2}>
            <Form.Item
              name="leave day description"
              hasFeedback={loading}
              rules={[
                {
                  required: true,
                  message: 'Type description'
                }
              ]}>
              <Input allowClear placeholder="Leave day short description" />
            </Form.Item>
          </Row>
          <Form.Item
            name="date range"
            hasFeedback={loading}
            rules={[
              {
                required: true,
                message: 'Select leave day duration'
              }
            ]}>
            <RangePicker
              defaultValue={[moment(date), moment(date)]}
              format={dateFormat}
            />
          </Form.Item>
        </Col>
      </Row>
    </Form>
  )
}
export default LeaveDaySimpleForm
