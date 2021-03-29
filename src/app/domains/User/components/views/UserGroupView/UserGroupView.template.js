import { Avatar } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import { Row, Col } from '@qonsoll/react-design'
import { style } from './UserGroupView.styles'

const mockData = [
  {
    src: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
  },
  {
    src: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
  },
  {
    src: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
  }
]

const UserGroupView = (props) => {
  const { avatarSize, maxCount } = props
  const { users } = props
  console.log(users)
  return (
    <Row v="center" noOuterGutters>
      <Col cw="auto">
        <Avatar.Group
          maxCount={maxCount}
          size={avatarSize}
          maxStyle={style.maxStyle}>
          {users.map((item, index) => (
            <Avatar
              key={index}
              size={avatarSize}
              src={item.avatarURL}
              icon={<UserOutlined />}
              {...item}
            />
          ))}
        </Avatar.Group>
      </Col>
    </Row>
  )
}
UserGroupView.defaultProps = {
  avatarSize: 'large',
  maxCount: 2
}
export default UserGroupView
