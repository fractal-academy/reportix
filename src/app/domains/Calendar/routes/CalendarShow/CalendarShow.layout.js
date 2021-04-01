import { Calendar, LegendCalendar } from 'domains/Calendar/components/views'
import { Col, Row, Box, Container } from '@qonsoll/react-design'
import CalendarAddEvent from 'domains/Calendar/combined/CalendarAddEvent'
import { Button, Card, Typography, Grid } from 'antd'
import { ArrowLeftOutlined } from '@ant-design/icons'
import { useHistory } from 'react-router'
import { CalendarAddSickDay } from 'domains/Calendar/combined/CalendarAddSickDay'

const { useBreakpoint } = Grid
const { Title } = Typography

const CalendarShow = () => {
  //[ADDITIONAL_HOOKS]
  const history = useHistory()
  const screens = useBreakpoint()

  //[TEMPLATE]
  return (
    <Container>
      <Row noGutters mx={screens === 'lg' ? 4 : 1}>
        <Col>
          <Row mt={4} mb={3}>
            <Col cw="auto">
              <Box display="flex" alignItems="center">
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
            </Col>

            <Col>
              <Box flex={1} display="flex" justifyContent="center">
                <CalendarAddSickDay />
              </Box>
            </Col>
            <Col cw="auto">
              <CalendarAddEvent />
            </Col>
          </Row>

          <Box
            bg="white"
            mb={3}
            p={2}
            borderRadius="6px"
            style={{
              position: 'sticky',
              top: '0px',
              zIndex: '1000',
              boxShadow: '0 20px 12px -12px rgba(0,0,0,0.25)'
            }}>
            <LegendCalendar />
          </Box>
          <Row noGutters>
            <Col>
              <Card>
                <Calendar />
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default CalendarShow
