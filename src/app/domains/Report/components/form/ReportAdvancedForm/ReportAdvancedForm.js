import { Box, Col, Container, Row } from '@qonsoll/react-design'
import { Card } from 'antd'
import TaskAddEvent from 'domains/Task/combined/TaskAddEvent'

const ReportAdvancedForm = () => {
  return (
    <Row noGutters>
      <Col>
        <Card style={{ backgroundColor: 'lightgray' }}>
          <Row display="flex">
            <Col>Today</Col>
            <Col>
              <Row noGutters h="between">
                <Col cw="auto">Tomorrow</Col>
                <Col cw="auto" h="right">
                  <TaskAddEvent />
                </Col>
              </Row>
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  )
}
export default ReportAdvancedForm
