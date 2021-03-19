import { Spin } from 'antd'
import { Row, Col } from '@qonsoll/react-design'

const Spinner = () => {
  return (
    <Row height="100%" h="center" v="center">
      <Col cw="auto" display="flex" v="center">
        <Spin size="large" />
      </Col>
    </Row>
  )
}

export default Spinner
