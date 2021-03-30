import { UserListItem } from 'domains/User/components/list'
import { Col, Row } from '@qonsoll/react-design'

const UserList = (props) => {
  const { users, withName, withEmail, requests } = props

  return (
    <Row noGutters>
      <Col>
        {users.map((item, index) => (
          <UserListItem
            id={item.id}
            key={index}
            avatarURL={item.avatarURL}
            firstName={item.firstName}
            surname={item.surname}
            email={item.email}
            withName={withName}
            withEmail={withEmail}
            leaveDayStatus={item?.leaveDayStatus}
            requests={requests}
          />
        ))}
      </Col>
    </Row>
  )
}
export default UserList
