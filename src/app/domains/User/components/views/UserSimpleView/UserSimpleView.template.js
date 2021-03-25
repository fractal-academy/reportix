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
      <Col cw="auto" px={0}>
        <Row v="center">
          <Col>{withName && <Text>{name}</Text>}</Col>
        </Row>
        <Row v="center">
          <Col>{withEmail && <Text>{email}</Text>}</Col>
        </Row>
      </Col>
    </Row>
  )
}

UserSimpleView.defaultProps = {
  avatarURL: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
  // firstName: 'Dima Okrushko',
  // surname: 'Okrushko',
  avatarSize: 'large',
  withName: true,
  withEmail: true,
  email: 'okrdima@gmail.com'
}
export default UserSimpleView
