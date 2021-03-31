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

const { Title } = Typography

const UsersAll = () => {
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
      <Row mt={3} noGutters>
        <Col>
          <Box mt={4} mx={4} display="flex" alignItems="center">
            <Box mr={2}>
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
              <UserList users={users} requests={requests} />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}
export default UsersAll
