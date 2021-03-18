import { Box, Col, Row } from '@qonsoll/react-design'
import Text from 'antd/lib/typography/Text'
import { UserGroupView } from 'domains/User/components/views'
import { Card } from 'antd'

const ProjectAdvancedView = (props) => {
  const { company, withProjects, project, withTasks, tasks } = props
  return (
    <Row>
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
  )
}
ProjectAdvancedView.defaultProps = {
  company: 'Senseteq',
  project: 'Expences-tracking-app',
  tasks: '20'
}

export default ProjectAdvancedView
