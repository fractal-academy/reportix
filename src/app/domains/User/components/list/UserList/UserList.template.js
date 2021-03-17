import { UserListItem } from 'domains/User/components/list'
import { Col, Row } from '@qonsoll/react-design'

const mockUsers = [
  {
    avatarURL:
      'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    firstName: 'Dima',
    surname: 'Okrushko',
    email: 'okrdima@gmail.com',
    leaveDayStatus: 'Vacation'
  },
  {
    avatarURL:
      'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    firstName: 'Dima',
    surname: 'Okrushko',
    email: 'okrdima@gmail.com',
    leaveDayStatus: 'Swap day'
  },
  {
    avatarURL:
      'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    firstName: 'Dima',
    surname: 'Okrushko',
    email: 'okrdima@gmail.com',
    leaveDayStatus: 'Work from home'
  },
  {
    avatarURL:
      'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    firstName: 'Dima',
    surname: 'Okrushko',
    email: 'okrdima@gmail.com',
    leaveDayStatus: 'Month Remote'
  },
  {
    avatarURL:
      'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    firstName: 'Dima',
    surname: 'Okrushko',
    email: 'okrdima@gmail.com',
    leaveDayStatus: 'Day off'
  },
  {
    avatarURL:
      'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    firstName: 'Dima',
    surname: 'Okrushko',
    email: 'okrdima@gmail.com',
    leaveDayStatus: 'Sick day'
  },
  {
    avatarURL:
      'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    firstName: 'Dima',
    surname: 'Okrushko',
    email: 'okrdima@gmail.com'
  }
]

const UserList = (props) => {
  const { users, withName, withEmail } = props

  return (
    <Row noGutters>
      <Col>
        {/*todo change mockUsers to Users when when there is a connection to DB*/}
        {mockUsers.map((item, index) => (
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
