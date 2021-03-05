import { Avatar } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import { Row, Col } from '@qonsoll/react-design'

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
  const { avatarSize } = props
  return (
    <Row v="center" noOuterGutters>
      <Col cw="auto">
        <Avatar.Group
          maxCount={2}
          size={avatarSize}
          maxStyle={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>
          {mockData.map((item) => (
            <Avatar
              key={item.src}
              size={avatarSize}
              src={item.src}
              icon={<UserOutlined />}
            />
          ))}
        </Avatar.Group>
      </Col>
    </Row>
  )
}
UserGroupView.defaultProps = {
  avatarSize: 'large'
}
export default UserGroupView
