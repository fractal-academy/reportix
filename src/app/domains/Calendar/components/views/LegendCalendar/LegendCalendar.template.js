import { Col, Row } from '@qonsoll/react-design'
import { LEAVE_DAY_VALUE } from 'app/constants/leaveDay'
import Tag from 'components/Tags/Tags'

const LegendCalendar = () => {
  return (
    <Row h={'between'}>
      {LEAVE_DAY_VALUE.map((item, index) => (
        <Col
          px={1}
          cw={[6, 6, 6, 2, 2, 2]}
          key={index}
          display="flex"
          h="center"
          mb={2}
          // pr={LEAVE_DAY_VALUE.length !== index + 1 ? 2 : 0}
        >
          <Tag status={item} />
        </Col>
      ))}
    </Row>
  )
}
export default LegendCalendar
