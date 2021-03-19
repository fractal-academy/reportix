import { ProjectAdvancedView } from 'domains/Project/components/views'
import { Col, Row } from '@qonsoll/react-design'

const mockProject = [
  {
    company: 'Senseteq',
    project: 'Expences-tracking-app',
    tasks: '20',
    startDate: '2021/04/04',
    deadline: '2021/04/04'
  },
  {
    company: 'Senseteq1',
    project: 'Expences-tracking-app111',
    tasks: '2011',
    startDate: '2021/04/04',
    deadline: '2021/04/04'
  }
]

const ProjectList = () => {
  return (
    <>
      <Row mt={4}>
        <Col>
          {mockProject.map((item, index) => (
            <Row my={2} borderRadius={'8px'} py={3}>
              <Col>
                <ProjectAdvancedView
                  key={index}
                  company={item.company}
                  project={item.project}
                  tasks={item.tasks}
                  startDate={item.startDate}
                  deadline={item.deadline}
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
