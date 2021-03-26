import { LEAVE_DAY_VALUE } from 'app/constants/leaveDay'
import { Select } from 'antd'
import Tag from 'components/Tags/Tags'
import { Col, Row } from '@qonsoll/react-design'

const LeaveDaySingleSelect = (props) => {
  const { Option } = Select
  const { onChange } = props
  return (
    <>
      <Row h="center" noGutters>
        <Col>
          <Select placeholder="Choose Leave day" onChange={onChange}>
            {LEAVE_DAY_VALUE.map((item, index) => (
              <Option key={index} value={item}>
                <Tag status={item} key={index} />
              </Option>
            ))}
          </Select>
        </Col>
      </Row>
    </>
  )
}

export default LeaveDaySingleSelect
