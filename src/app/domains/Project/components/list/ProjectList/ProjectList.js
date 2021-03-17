import { ProjectAdvancedView } from 'domains/Project/components/views'
import { Col, Row } from '@qonsoll/react-design'
import { Card } from 'antd'

const mockProject = [
  {
    company: 'Senseteq',
    project: 'Expences-tracking-app',
    tasks: '20'
  },
  {
    company: 'Senseteq1',
    project: 'Expences-tracking-app111',
    tasks: '2011'
  }
]

const ProjectList = () => {
  return (
    <>
      <Row>
        <Col>
          {mockProject.map((item, index) => (
            <Card>
              <ProjectAdvancedView
                key={index}
                company={item.company}
                project={item.project}
                tasks={item.tasks}
              />
            </Card>
          ))}
        </Col>
      </Row>
    </>
  )
}
export default ProjectList
