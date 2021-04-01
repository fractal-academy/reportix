import RequestList from 'domains/Request/components/list/RequestList'
import { Box, Col, Container, Row } from '@qonsoll/react-design'
import CalendarAddEvent from 'domains/Calendar/combined/CalendarAddEvent'
import { Button, Grid } from 'antd'
import { ArrowLeftOutlined } from '@ant-design/icons'
import Title from 'antd/es/typography/Title'
import { useHistory } from 'react-router-dom'
import { CalendarAddSickDay } from 'domains/Calendar/combined/CalendarAddSickDay'

const { useBreakpoint } = Grid

const RequestsAllLayout = () => {
  //[ADDITIONAL_HOOKS]
  const history = useHistory()
  const screens = useBreakpoint()

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
                  Requests
                </Title>
              </Box>
            </Col>

            <Col>
              <Box
                flex={1}
                display="flex"
                justifyContent={screens.md ? 'center' : 'start'}>
                <CalendarAddSickDay />
              </Box>
            </Col>
            <Col cw="auto">
              <CalendarAddEvent />
            </Col>
          </Row>

          <RequestList />
        </Col>
      </Row>
    </Container>
  )
}

export default RequestsAllLayout
