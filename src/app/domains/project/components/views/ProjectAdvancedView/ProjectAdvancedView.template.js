import { Box, Col, Row } from '@qonsoll/react-design'
import Text from 'antd/lib/typography/Text'
import { UserGroupView } from 'domains/user/components/views/UserGroupView'

const ProjectAdvancedView = (props) => {
  const { company, withProjects, project, withTasks, tasks } = props
  return (
    <Box
      py={4}
      px={2}
      mb={2}
      border="1px solid lightgrey"
      borderRadius="md"
      background="lightgrey">
      <Row>
        <Col>
          <UserGroupView />
          <Row my={2} noGutters>
            <Col cw="auto">
              <Text strong>Company: </Text>
              <Text>{company}</Text>
            </Col>
          </Row>
          <Row mb={2} noGutters>
            <Col>
              <Text strong>Projects:</Text>
              <Text>{withProjects ? project : 'none'}</Text>
            </Col>
          </Row>
          <Row mb={2} noGutters>
            <Col>
              <Text strong>Tasks: </Text>
              <Text>{withProjects && withTasks ? tasks : 'none'}</Text>
            </Col>
          </Row>
        </Col>
      </Row>
    </Box>
  )
}
ProjectAdvancedView.defaultProps = {
  company: 'Senseteq',
  withProjects: true,
  project: 'Expences-tracking-app',
  withTasks: true,
  tasks: '20'
}

export default ProjectAdvancedView
