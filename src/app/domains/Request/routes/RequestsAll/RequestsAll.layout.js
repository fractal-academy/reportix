import RequestList from 'domains/Request/components/list/RequestList'
import { Box, Col, Container, Row } from '@qonsoll/react-design'
import ProjectAddEvent from 'domains/Project/components/combined/ProjectAddEvent'
import CalendarAddEvent from 'domains/Calendar/combined/CalendarAddEvent'
import { Button } from 'antd'
import { ArrowLeftOutlined } from '@ant-design/icons'
import Title from 'antd/es/typography/Title'
import { useHistory } from 'react-router-dom'
import ProjectList from 'domains/Project/components/list/ProjectList'

const RequestsAllLayout = () => {
  const { history } = useHistory()
  return (
    <Container>
      <Box
        mt={4}
        mx={4}
        display="flex"
        alignItems="center"
        justifyContent="space-between">
        <Box display="flex" alignItems="center">
          <Box mr={2} display="flex" alignItems="center">
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
        <CalendarAddEvent />
      </Box>
      <Box mx={4}>
        <RequestList withButtonAccept />
      </Box>
      {/*<Row mt={3} noGutters>*/}
      {/*  <Col>*/}
      {/*    <Row h="right">*/}
      {/*      <Col cw="auto">*/}
      {/*        <CalendarAddEvent />*/}
      {/*      </Col>*/}
      {/*    </Row>*/}
      {/*    <Row>*/}
      {/*      <Col>*/}
      {/*        <RequestList withButtonAccept />*/}
      {/*      </Col>*/}
      {/*    </Row>*/}
      {/*  </Col>*/}
      {/*</Row>*/}
    </Container>
  )
}

export default RequestsAllLayout
