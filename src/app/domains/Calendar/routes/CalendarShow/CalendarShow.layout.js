import { Calendar, LegendCalendar } from 'domains/Calendar/components/views'
import { Col, Row } from '@qonsoll/react-design'
import { Button } from 'antd'
import { PlusCircleOutlined } from '@ant-design/icons'

const CalendarShow = () => {
  return (
    <Row noGutters>
      <Col>
        <Row noGutters my={3} v={'center'}>
          <Col>
            <LegendCalendar />
          </Col>
          <Col cw="auto">
            <Button type="primary" icon={<PlusCircleOutlined />}>
              Add event
            </Button>
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
