import { Row, Col, Container, Box } from '@qonsoll/react-design'
import { UserList } from 'domains/user/components/list'
import { UserListSearch } from 'domains/user/components/combine'

const UserAll = () => {
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
export default UserAll
