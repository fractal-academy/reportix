import { Row, Col } from '@qonsoll/react-design'
import { Typography, Tooltip } from 'antd'
import { LockOutlined } from '@ant-design/icons'

const { Text, Title } = Typography

const TaskSimpleView = () => {
  return (
    <Row noGutters mb={2} pt={2}>
      <Col>
        <Row>
          <Col cw="auto" pr={0}>
            <Tooltip title={'Blockers: You, we, he, them'}>
              <LockOutlined />
            </Tooltip>
          </Col>
          <Col p={0}>
            <Title level={5}>
              Reportix. Create Layout for this App with Sashka
            </Title>
          </Col>
          <Col cw="auto" pt={1}>
            <Text>Done</Text>
          </Col>
        </Row>
        <Row py={2}>
          <Col>
            <Text type="secondary">
              Description: This description about deadline and estimation
            </Text>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default TaskSimpleView
