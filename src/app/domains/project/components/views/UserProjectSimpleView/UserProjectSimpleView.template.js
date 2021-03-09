import { Box, Col, Row } from '@qonsoll/react-design'
import Text from 'antd/lib/typography/Text'

const UserProjectSimpleView = (props) => {
  const { company, withProjects, project, withTasks, tasks } = props
  return (
    <Box
      p={2}
      mb={2}
      border="1px solid lightgrey"
      borderRadius="md"
      hoverColor="red">
      <Row>
        <Col>
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
UserProjectSimpleView.defaultProps = {
  company: 'Senseteq',
  withProjects: true,
  project: 'Expences-tracking-app',
  withTasks: true,
  tasks: '20'
}

export default UserProjectSimpleView
