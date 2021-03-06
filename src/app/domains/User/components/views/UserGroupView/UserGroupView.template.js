import { Avatar, Tooltip } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import { Row, Col } from '@qonsoll/react-design'
import { style } from './UserGroupView.styles'

const UserGroupView = (props) => {
  const { avatarSize, maxCount } = props
  const { users, userIds } = props

  const filteredData = users?.filter((user) => userIds.includes(user?.id))

  return (
    <Row v="center" noOuterGutters>
      <Col cw="auto">
        <Avatar.Group
          maxCount={maxCount}
          size={avatarSize}
          maxStyle={style.maxStyle}>
          {filteredData.map((item, index) => (
            <Tooltip
              title={
                item.firstName && item.surname
                  ? `${item.firstName} ${item.surname}`
                  : item.email
              }
              placement="top"
              key={index}>
              <Avatar
                key={index}
                size={avatarSize}
                src={item.avatarURL}
                icon={<UserOutlined />}
              />
            </Tooltip>
          ))}
        </Avatar.Group>
      </Col>
    </Row>
  )
}
UserGroupView.defaultProps = {
  avatarSize: 'large',
  maxCount: 10
}
export default UserGroupView
