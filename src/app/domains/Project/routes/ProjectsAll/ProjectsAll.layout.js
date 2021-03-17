import { ProjectAdvancedView } from 'domains/Project/components/views'
import { Col, Container, Row } from '@qonsoll/react-design'
import ProjectList from 'domains/Project/components/list/ProjectList/ProjectList'

const ProjectsAll = () => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <ProjectList />
          </Col>
        </Row>
      </Container>
    </>
  )
}
export default ProjectsAll
