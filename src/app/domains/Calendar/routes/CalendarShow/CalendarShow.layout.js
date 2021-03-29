import { Calendar, LegendCalendar } from 'domains/Calendar/components/views'
import { Col, Row } from '@qonsoll/react-design'
import CalendarAddEvent from 'domains/Calendar/combined/CalendarAddEvent'

const CalendarShow = () => {
  return (
    <Row noGutters>
      <Col>
        <Row noGutters my={3} v={'center'}>
          <Col>
            <LegendCalendar />
          </Col>
          <Col cw="auto">
            <CalendarAddEvent />
          </Col>
        </Row>
        <Row noGutters>
          <Col>
            <Calendar />
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default CalendarShow
