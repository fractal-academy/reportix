import { Avatar } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import { Row, Col } from '@qonsoll/react-design'
import { Typography } from 'antd'
const { Text } = Typography

const UserSimpleView = (props) => {
  const { avatarURL, withName, name, avatarSize, withEmail, email } = props

  return (
    <Row v="center" noGutters>
      <Col cw="auto">
        {/*icon if User without avatar*/}
        <Avatar size={avatarSize} src={avatarURL} icon={<UserOutlined />} />
      </Col>
      {(withName || withEmail) && (
        <Col cw="auto" px={0}>
          {withName && (
            <Row v="center">
              <Col>
                <Text>{name}</Text>
              </Col>
            </Row>
          )}
          {withEmail && (
            <Row v="center">
              <Col>
                <Text>{email}</Text>
              </Col>
            </Row>
          )}
        </Col>
      )}
    </Row>
  )
}

// UserSimpleView.defaultProps = {
//   avatarURL: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
//   name: 'Dima Oukushko',
//   avatarSize: 'large',
//   withName: true,
//   withEmail: true,
//   email: 'okrdima@gmail.com'
// }
export default UserSimpleView
