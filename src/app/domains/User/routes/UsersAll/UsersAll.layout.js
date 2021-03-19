import { Row, Col, Container, Box } from '@qonsoll/react-design'
import { UserList } from 'domains/User/components/list'
import { UserListSearch } from 'domains/User/components/combine'
import { LeaveDayFilter } from 'domains/LeaveDay/components/filter'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { getCollectionRef } from 'app/services/Firestore'
import { COLLECTIONS } from 'app/constants'
import { Spinner } from 'components/Spinner'

const UsersAll = () => {
  const [users, loading] = useCollectionData(
    getCollectionRef(COLLECTIONS.USERS),
    { idField: 'id' }
  )
  console.log(users)

  if (!users || loading) {
    return <Spinner />
  }

  return (
    <Container>
      <Row>
        <Col>
          <Row h={'center'} v={'center'} noGutters>
            <Col>
              <LeaveDayFilter />
            </Col>
          </Row>
          <Row noGutters>
            <Col>
              <Box mb={3} mt={2}>
                <UserListSearch />
              </Box>
              <UserList users={users} />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}
export default UsersAll
