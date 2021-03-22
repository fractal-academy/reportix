import { Col, Container, Row } from '@qonsoll/react-design'
import ProjectList from 'domains/Project/components/list/ProjectList/ProjectList'
import { AppstoreAddOutlined, UserAddOutlined } from '@ant-design/icons'
import { Button } from 'antd'

const ProjectsAll = () => {
  return (
    <>
      <Container>
        <Row mt={3} noGutters>
          <Col>
            <Row h="right">
              <Col cw="auto">
                <Button type="primary" icon={<AppstoreAddOutlined />}>
                  Add project
                </Button>
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
