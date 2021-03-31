import { Calendar, LegendCalendar } from 'domains/Calendar/components/views'
import { Col, Row, Box, Container } from '@qonsoll/react-design'
import CalendarAddEvent from 'domains/Calendar/combined/CalendarAddEvent'
import { Button, Card, Typography } from 'antd'
import { ArrowLeftOutlined } from '@ant-design/icons'
import { useHistory } from 'react-router'

const { Title } = Typography

const CalendarShow = () => {
  //[ADDITIONAL_HOOKS]
  const history = useHistory()

  //[TEMPLATE]
  return (
    <Container>
      <Row noGutters mx={4}>
        <Col>
          <Box
            mt={4}
            mb={3}
            display="flex"
            justifyContent={'space-between'}
            alignItems={'center'}>
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
            <CalendarAddEvent />
          </Box>
          <Row noGutters mb={3}>
            <Col>
              <Card>
                <Row noGutters v={'center'}>
                  <Col>
                    <LegendCalendar />
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
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
