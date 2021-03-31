import { Calendar, LegendCalendar } from 'domains/Calendar/components/views'
import { Col, Row, Box } from '@qonsoll/react-design'
import CalendarAddEvent from 'domains/Calendar/combined/CalendarAddEvent'
import { Button, Typography } from 'antd'
import { ArrowLeftOutlined } from '@ant-design/icons'
import { useHistory } from 'react-router'

const { Title } = Typography

const CalendarShow = () => {
  //[ADITIONAL_HOOKS]
  const history = useHistory()

  //[TEMPLATE]
  return (
    <Row noGutters>
      <Col>
        <Box mt={4} mx={4} display="flex" alignItems="center">
          <Box mr={2}>
            <Button
              size="large"
              type="text"
              icon={<ArrowLeftOutlined />}
              onClick={() => history.goBack()}
            />
          </Box>
          <Title style={{ marginBottom: 0 }} level={3}>
            Calendar
          </Title>
        </Box>
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
