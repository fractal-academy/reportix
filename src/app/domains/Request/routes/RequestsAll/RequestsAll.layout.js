import RequestList from 'domains/Request/components/list/RequestList'
import { Col, Row } from '@qonsoll/react-design'

const RequestsAllLayout = () => {
  return (
    <>
      <Row>
        <Col>
          <RequestList />
        </Col>
      </Row>
    </>
  )
}

export default RequestsAllLayout
