import { Box, Col, Row } from '@qonsoll/react-design'
import Text from 'antd/lib/typography/Text'
import { UserGroupView } from 'domains/User/components/views'
import { Card } from 'antd'

const ProjectAdvancedView = (props) => {
  const { company, project, tasks } = props
  return (
    <Card hoverable>
      <Row noGutters>
        <Col>
          <UserGroupView />
          <Row my={2} noGutters>
            <Col cw="auto">
              <Text strong>Company: </Text>
              <Text> {company}</Text>
            </Col>
          </Row>
          <Row mb={2} noGutters>
            <Col>
              <Text strong>Projects: </Text>
              <Text>{project}</Text>
            </Col>
          </Row>
          <Row mb={2} noGutters>
            <Col>
              <Text strong>Tasks: </Text>
              <Text>{tasks || 'none'}</Text>
            </Col>
          </Row>
        </Col>
      </Row>
    </Card>
  )
}
ProjectAdvancedView.defaultProps = {
  company: 'Senseteq',
  project: 'Expences-tracking-app',
  tasks: '20'
}

export default ProjectAdvancedView
