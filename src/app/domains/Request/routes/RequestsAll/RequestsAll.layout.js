import RequestList from 'domains/Request/components/list/RequestList'
import { Col, Container, Row } from '@qonsoll/react-design'

const RequestsAllLayout = () => {
  return (
    <>
      <Container>
        <Row mt={3} noGutters>
          <Col>
            <RequestList />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default RequestsAllLayout
