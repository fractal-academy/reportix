import { ProjectAdvancedView } from 'domains/Project/components/views'
import { Col, Row } from '@qonsoll/react-design'
import { useSession } from 'context/SesionContext'
import { useParams } from 'react-router-dom'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { getCollectionRef } from 'services/Firestore'
import COLLECTIONS from 'constants/collection'
import { Spinner } from 'components/Spinner'

const ProjectList = (props) => {
  const { ownProjects } = props
  const { id } = useParams()

  const [projects, isLoading] = useCollectionData(
    getCollectionRef(COLLECTIONS.PROJECTS),
    { idField: 'id' }
  )
  const [usersData, loading] = useCollectionData(
    getCollectionRef(COLLECTIONS.USERS),
    { idField: 'id' }
  )
  if (!usersData || !projects || isLoading || loading) {
    return <Spinner />
  }

  const filteredProjects =
    !isLoading && projects.filter((item) => item.user === id)
  const switchProjects = ownProjects ? filteredProjects : projects
  return (
    <>
      <Row noGutters>
        <Col>
          {!isLoading &&
            switchProjects.map((item, index) => (
              <Row my={2} borderRadius={'8px'} py={3} noGutters key={index}>
                <Col>
                  <ProjectAdvancedView data={item} users={usersData} />
                </Col>
              </Row>
            ))}
        </Col>
      </Row>
    </>
  )
}
export default ProjectList
