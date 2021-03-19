import { Box, Col, Row } from '@qonsoll/react-design'
import Text from 'antd/lib/typography/Text'
import { UserGroupView } from 'domains/User/components/views'
import { Button, Card } from 'antd'
import { EditOutlined } from '@ant-design/icons'
import { ROUTES_PATHS } from '../../../../../constants'
import { useHistory } from 'react-router-dom'

const ProjectAdvancedView = (props) => {
  const { company, project, tasks, startDate, deadline } = props
  const history = useHistory()

  return (
    <Card hoverable>
      <Row noGutters h="between">
        <Col cw="auto">
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
        <Col cw="auto">
          <Box>
            <Text>Project start date: {startDate}</Text>
          </Box>
          <Box>
            <Text>Project end date: {deadline}</Text>
          </Box>
        </Col>
        <Col cw="auto">
          <Button
            type="primary"
            icon={<EditOutlined />}
            onClick={() => {
              history.push(ROUTES_PATHS.PROJECT_EDIT)
            }}>
            Edit
          </Button>
        </Col>
      </Row>
    </Card>
  )
}
ProjectAdvancedView.defaultProps = {
  company: 'Senseteq',
  project: 'Expences-tracking-app',
  tasks: '20',
  startDate: '2021/04/04',
  deadline: '2021/04/04'
}

export default ProjectAdvancedView
