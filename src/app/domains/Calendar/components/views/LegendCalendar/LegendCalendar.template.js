import { Col, Row } from '@qonsoll/react-design'
import { LEAVE_DAY_VALUE } from 'app/constants/leaveDay'
import Tag from 'components/Tags/Tags'

const LegendCalendar = () => {
  return (
    <Row noGutters h={'between'}>
      {LEAVE_DAY_VALUE.map((item, index) => (
        <Col cw={'auto'}>
          <Tag status={item} key={index} />
        </Col>
      ))}
    </Row>
  )
}
export default LegendCalendar
