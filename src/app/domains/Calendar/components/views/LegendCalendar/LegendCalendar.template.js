import { Col, Row } from '@qonsoll/react-design'
import { LEAVE_DAY_VALUE } from 'app/constants/leaveDay'
import Tag from 'components/Tags/Tags'

const LegendCalendar = () => {
  return (
    <Row noGutters h={'between'}>
      {LEAVE_DAY_VALUE.map((item, index) => (
        <Col
          key={index}
          display="flex"
          h="center"
          mr={LEAVE_DAY_VALUE.length !== index + 1 ? 2 : 0}>
          <Tag status={item} />
        </Col>
      ))}
    </Row>
  )
}
export default LegendCalendar
