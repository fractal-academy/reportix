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
  return (
    <Row v="center" noOuterGutters>
      <Col cw="auto">
        <Avatar.Group
          maxCount={maxCount}
          size={avatarSize}
          maxStyle={style.maxStyle}>
          {mockData.map((item, index) => (
            <Avatar
              key={index}
              size={avatarSize}
              src={item.src}
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
