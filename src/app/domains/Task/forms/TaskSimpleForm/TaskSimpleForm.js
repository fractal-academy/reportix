import { DatePicker, Form, Input, Select, Tag } from 'antd'
import { Col, Row } from '@qonsoll/react-design'
import LeaveDaySingleSelect from 'domains/LeaveDay/components/select/LeaveDaySingleSelect'
import { Option } from 'antd/lib/mentions'
import ProjectSingleSelect from 'domains/Project/components/select/ProjectSingleSelect/ProjectSingleSelect'

const selectDayMap = ['Today', 'Tomorrow']
const selectStatusMap = ['In progress', 'Done']

const TaskSimpleForm = (props) => {
  const { onFinish, form } = props
  const { onChange } = (date) => {
    return date
  }
  const dateFormat = 'YYYY/MM/DD'

  return (
    <Form onFinish={onFinish} form={form}>
      <Row h="center" noGutters mb={2}>
        <Col>
          <Row mb={2}>
            <Col>
              <Form.Item name="ProjectName">
                {/*<Input allowClear placeholder="Enter project name" />*/}
                <ProjectSingleSelect />
              </Form.Item>
            </Col>
          </Row>
          <Row mb={2}>
            <Col>
              <Form.Item name="taskName">
                <Input allowClear placeholder="Task name" />
              </Form.Item>
            </Col>
          </Row>
          <Row mb={2}>
            <Col>
              <Form.Item name="description">
                <Input allowClear placeholder="Short task  description" />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            {/*<Col>*/}
            {/*  <Form.Item*/}
            {/*    name="dateStart"*/}
            {/*    rules={[*/}
            {/*      {*/}
            {/*        required: true*/}
            {/*      }*/}
            {/*    ]}>*/}
            {/*    <DatePicker*/}
            {/*      style={{ width: '100%' }}*/}
            {/*      onChange={onCalendarChange}*/}
            {/*      allowClear={false}*/}
            {/*      placeholder="From"*/}
            {/*      format={dateFormat}*/}
            {/*    />*/}
            {/*  </Form.Item>*/}
            {/*</Col>*/}

            {/*<Col>*/}
            {/*  <Form.Item*/}
            {/*    name="dateEnd"*/}
            {/*    rules={[*/}
            {/*      {*/}
            {/*        required: true*/}
            {/*      }*/}
            {/*    ]}>*/}
            {/*    <DatePicker*/}
            {/*      style={{ width: '100%' }}*/}
            {/*      onChange={onCalendarChange}*/}
            {/*      allowClear={false}*/}
            {/*      placeholder="To"*/}
            {/*      format={dateFormat}*/}
            {/*    />*/}
            {/*  </Form.Item>*/}
            {/*</Col>*/}
          </Row>
        </Col>
        <Col cw={3}>
          <Row mb={2}>
            <Col>
              <Form.Item name="date">
                <Select
                  defaultValue={selectDayMap[0]}
                  placeholder="Choose date"
                  onChange={onChange}>
                  {selectDayMap.map((item, index) => (
                    <Option key={index} value={item}>
                      {item}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row mb={2}>
            <Col>
              <Form.Item name="status">
                <Select
                  placeholder="Select status"
                  onChange={onChange}
                  defaultValue={selectStatusMap[0]}>
                  {selectStatusMap.map((item, index) => (
                    <Option key={index} value={item}>
                      {item}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row></Row>
        </Col>
      </Row>
      <Row h="center" mb={2}>
        <Col>
          <Form.Item name="blockers">
            <Input allowClear placeholder="Blockers" />
          </Form.Item>
        </Col>
      </Row>
    </Form>
  )
}
export default TaskSimpleForm
