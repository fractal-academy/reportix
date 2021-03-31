import { Spin } from 'antd'
import { Row, Col } from '@qonsoll/react-design'

const Spinner = () => {
  return (
    <Row height="100%" weigt="100%">
      <Col>
        <Spin size="large" />
      </Col>
    </Row>
  )
}

export default Spinner
