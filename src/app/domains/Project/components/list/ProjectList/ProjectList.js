import { ProjectAdvancedView } from 'domains/Project/components/views'
import { Col, Row } from '@qonsoll/react-design'
import { useSession } from 'context/SesionContext'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { getCollectionRef } from 'services/Firestore'
import COLLECTIONS from 'constants/collection'
import { Spinner } from 'components/Spinner'

const ProjectList = (props) => {
  const currentUser = useSession()

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
    !isLoading &&
    projects.filter((item) => item.users.includes(currentUser?.uid))
  const switchProjects = currentUser?.isAdmin ? projects : filteredProjects
  return (
    <>
      <Row noGutters>
        <Col>
          {!isLoading &&
            switchProjects.map((item, index) => (
              <Row my={3} noGutters key={index}>
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
