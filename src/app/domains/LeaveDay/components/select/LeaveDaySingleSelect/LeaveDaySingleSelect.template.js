import { LEAVE_DAY_VALUE } from 'app/constants/leaveDay'
import { Select } from 'antd'
import Tag from 'components/Tags/Tags'
import { Col, Row } from '@qonsoll/react-design'

const LeaveDaySingleSelect = (props) => {
  const { Option } = Select
  const { onChange } = props
  // function handleChange(value) {
  //   return value
  // }
  return (
    <>
      <Row h="center">
        <Col cw="auto">
          <Select
            placeholder="Choose Leave day"
            // defaultValue="Choose Leave day"
            style={{ width: 180 }}
            onChange={onChange}>
            {LEAVE_DAY_VALUE.map((item, index) => (
              <Option key={index} value={item}>
                {/*{item}*/}
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
