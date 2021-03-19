import { Row, Col, Container, Box } from '@qonsoll/react-design'
import { UserList } from 'domains/User/components/list'
import { UserListSearch } from 'domains/User/components/combine'
import { LeaveDayFilter } from 'domains/LeaveDay/components/filter'

const UsersAll = () => {
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
              <UserList />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}
export default UsersAll
