import { Row, Col, Container, Box } from '@qonsoll/react-design'
import { UserList } from 'domains/User/components/list'
import { UserListSearch } from 'domains/User/components/combine'

const UsersAll = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Box mb={3}>
            <UserListSearch />
          </Box>
          <UserList />
        </Col>
      </Row>
    </Container>
  )
}
export default UsersAll
