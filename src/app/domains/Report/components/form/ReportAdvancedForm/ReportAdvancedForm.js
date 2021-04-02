import { Box, Col, Container, Row } from '@qonsoll/react-design'
import { Card } from 'antd'

const ReportAdvancedForm = () => {
  return (
    <Row noGutters>
      <Col>
        <Card>
          <Row>
            <Col>Today</Col>
            <Col>Tomorrow</Col>
            <Col>Blockers</Col>
          </Row>
        </Card>
      </Col>
    </Row>
  )
}
export default ReportAdvancedForm
