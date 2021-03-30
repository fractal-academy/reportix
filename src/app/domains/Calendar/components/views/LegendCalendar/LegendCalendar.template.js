import { Col, Row } from '@qonsoll/react-design'
import { LEAVE_DAY_VALUE } from 'app/constants/leaveDay'
import Tag from 'components/Tags/Tags'

const LegendCalendar = () => {
  return (
    <Row noGutters>
      <Col>
        {LEAVE_DAY_VALUE.map((item, index) => (
          <Tag status={item} key={index} />
        ))}
      </Col>
    </Row>
  )
}
export default LegendCalendar
