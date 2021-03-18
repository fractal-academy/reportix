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
      <Row mt={4}>
        <Col>
          {mockProject.map((item, index) => (
            <Row
              my={2}
              border="1px solid lightgray"
              borderRadius={'8px'}
              py={3}>
              <Col>
                <ProjectAdvancedView
                  key={index}
                  company={item.company}
                  project={item.project}
                  tasks={item.tasks}
                />
              </Col>
            </Row>
          ))}
        </Col>
      </Row>
    </>
  )
}
export default ProjectList
