import { Row, Col, Container, Box } from '@qonsoll/react-design'
import { UserList } from 'domains/User/components/list'
import { UserListSearch } from 'domains/User/components/combine'
import { LeaveDayFilter } from 'domains/LeaveDay/components/filter'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { getCollectionRef } from 'app/services/Firestore'
import { COLLECTIONS } from 'app/constants'
import { Spinner } from 'components/Spinner'
import { Button, Typography } from 'antd'
import { ArrowLeftOutlined } from '@ant-design/icons'
import { useHistory } from 'react-router'
import ProjectAddEvent from 'domains/Project/components/combined/ProjectAddEvent'
import ProjectList from 'domains/Project/components/list/ProjectList'
import { useSession } from 'context/SesionContext'

const { Title } = Typography

const UsersAll = () => {
  const user = useSession()
  const history = useHistory()

  const [users, loading] = useCollectionData(
    getCollectionRef(COLLECTIONS.USERS),
    { idField: 'id' }
  )
  const [requests, isLoading] = useCollectionData(
    getCollectionRef(COLLECTIONS.LEAVE_DAYS),
    { idField: 'id' }
  )
  if (!users || loading || isLoading) {
    return <Spinner />
  }

  return (
    <Container>
      <Box
        mt={4}
        mx={4}
        display="flex"
        alignItems="center"
        justifyContent="space-between">
        <Box display="flex" alignItems="center">
          <Box mr={2} display="flex" alignItems="center">
            <Button
              size="large"
              type="text"
              icon={<ArrowLeftOutlined />}
              onClick={() => history.goBack()}
            />
          </Box>
          <Title style={{ marginBottom: 0 }} level={3}>
            Users
          </Title>
        </Box>
        {/*{user?.isAdmin && <ProjectAddEvent />}*/}
      </Box>
      <Box mx={4}>
        <LeaveDayFilter />
      </Box>
      <Box mx={4} mt={4}>
        <UserListSearch />
      </Box>
      <Box mx={4} mt={4}>
        <UserList users={users} requests={requests} withName />
      </Box>
    </Container>
  )
}
export default UsersAll
