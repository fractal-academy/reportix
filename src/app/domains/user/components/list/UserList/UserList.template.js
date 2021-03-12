import { UserSimpleView } from 'domains/user/components/views'
import { Divider } from 'antd'

const mockUsers = [
  {
    avatarURL:
      'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    firstName: 'Dima',
    surname: 'Okrushko',
    email: 'okrdima@gmail.com'
  },
  {
    avatarURL:
      'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    firstName: 'Dima',
    surname: 'Okrushko',
    email: 'okrdima@gmail.com'
  },
  {
    avatarURL:
      'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    firstName: 'Dima',
    surname: 'Okrushko',
    email: 'okrdima@gmail.com'
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
    <>
      {mockUsers.map((item, index) => (
        <>
          <UserSimpleView
            key={index}
            avatarURL={item.avatarURL}
            name={`${item.firstName} ${item.surname}`}
            email={item.email}
            withName={withName}
            withEmail={withEmail}
          />
          <Divider />
        </>
      ))}
    </>
  )
}
export default UserList
