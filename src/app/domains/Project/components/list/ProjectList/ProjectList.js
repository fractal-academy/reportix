import { ProjectAdvancedView } from 'domains/Project/components/views'
import { Col, Row } from '@qonsoll/react-design'
import { useSession } from 'context/SesionContext'
import { useParams } from 'react-router-dom'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { getCollectionRef } from 'services/Firestore'
import COLLECTIONS from 'constants/collection'

const mockProject = [
  {
    company: 'Senseteq',
    project: 'Expences tracking app',
    tasks: '20',
    startDate: '2021/04/04',
    deadline: '2021/04/04'
  },
  {
    company: 'Senseteq1',
    project: 'Simple TODO',
    tasks: '2011',
    startDate: '2021/04/04',
    deadline: '2021/04/04'
  }
]

const ProjectList = (props) => {
  const { ownProjects } = props
  const currentUser = useSession()
  const { id } = useParams()

  const [projects, isLoading] = useCollectionData(
    getCollectionRef(COLLECTIONS.PROJECTS),
    { idField: 'id' }
  )
  const filteredProjects =
    !isLoading && projects.filter((item) => item.user === id)
  const switchProjects = ownProjects ? filteredProjects : projects
  return (
    <>
      <Row>
        <Col>
          {!isLoading &&
            switchProjects.map((item, index) => (
              <Row my={2} borderRadius={'8px'} py={3} noGutters key={index}>
                <Col>
                  <ProjectAdvancedView data={item} />
                </Col>
              </Row>
            ))}
        </Col>
      </Row>
    </>
  )
}
export default ProjectList
