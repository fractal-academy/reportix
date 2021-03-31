import RequestList from 'domains/Request/components/list/RequestList'
import { Col, Container, Row, Box } from '@qonsoll/react-design'
import { Button, Typography } from 'antd'
import { ArrowLeftOutlined } from '@ant-design/icons'
import { useHistory } from 'react-router'

const { Title } = Typography

const RequestsAllLayout = () => {
  //[ADDITIONAL_HOOKS]
  const history = useHistory()

  //[TEMPLATE]
  return (
    <Container>
      <Row mt={3} noGutters>
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
              Requests
            </Title>
          </Box>
          <RequestList withButtonAccept />
        </Col>
      </Row>
    </Container>
  )
}

export default RequestsAllLayout
