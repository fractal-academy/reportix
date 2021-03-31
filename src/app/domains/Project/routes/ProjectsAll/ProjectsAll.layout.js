import { Col, Container, Row, Box } from '@qonsoll/react-design'
import ProjectList from 'domains/Project/components/list/ProjectList/ProjectList'
import {
  AppstoreAddOutlined,
  UserAddOutlined,
  ArrowLeftOutlined
} from '@ant-design/icons'
import { Button, Typography } from 'antd'
import CalendarAddEvent from 'domains/Calendar/combined/CalendarAddEvent'
import ProjectAddEvent from 'domains/Project/components/combined/ProjectAddEvent'
import { useHistory } from 'react-router'

const { Title } = Typography

const ProjectsAll = () => {
  //[ADITIONAL_HOOKS]
  const history = useHistory()

  //[TEMPLATE]
  return (
    <Container>
      <Row mt={3} noGutters>
        <Col>
          <Box mt={4} mx={4} display="flex" alignItems="center">
            <Box mr={2}>
              <Button
                size="large"
                type="text"
                icon={<ArrowLeftOutlined />}
                onClick={() => history.goBack()}
              />
            </Box>
            <Title style={{ marginBottom: 0 }} level={3}>
              Projects
            </Title>
          </Box>
          <Row h="right">
            <Col cw="auto">
              <ProjectAddEvent />
            </Col>
          </Row>
          <Row noGutters>
            <Col>
              <ProjectList />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}
export default ProjectsAll
