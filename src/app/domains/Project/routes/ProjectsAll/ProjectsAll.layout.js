import { Col, Container, Row } from '@qonsoll/react-design'
import ProjectList from 'domains/Project/components/list/ProjectList/ProjectList'
import { AppstoreAddOutlined, UserAddOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import CalendarAddEvent from 'domains/Calendar/combined/CalendarAddEvent'
import ProjectAddEvent from 'domains/Project/components/combined/ProjectAddEvent'

const ProjectsAll = () => {
  return (
    <>
      <Container>
        <Row mt={3} noGutters>
          <Col>
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
    </>
  )
}
export default ProjectsAll
