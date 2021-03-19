import { UserListItem } from 'domains/User/components/list'
import { Col, Row } from '@qonsoll/react-design'

const UserList = (props) => {
  const { users, withName, withEmail } = props

  return (
    <Row noGutters>
      <Col>
        {/*todo change mockUsers to Users when when there is a connection to DB*/}
        {users.map((item, index) => (
          <UserListItem
            key={index}
            avatarURL={item.avatarURL}
            firstName={item.firstName}
            surname={item.surname}
            email={item.email}
            withName={withName}
            withEmail={withEmail}
            leaveDayStatus={item?.leaveDayStatus}
          />
        ))}
      </Col>
    </Row>
  )
}
export default UserList
