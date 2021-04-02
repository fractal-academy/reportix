import { Avatar } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import { Row, Col } from '@qonsoll/react-design'
import { Typography, Tooltip } from 'antd'
const { Text } = Typography

const UserSimpleView = (props) => {
  const {
    avatarURL,
    withName,
    name,
    avatarSize,
    withEmail,
    email,
    nameTooltip
  } = props

  return (
    <Row noGutters display={props.vertical ? 'inline' : 'flex'}>
      <Col cw="auto">
        {/*icon if User without avatar*/}
        <Tooltip title={nameTooltip && nameTooltip} placement="top">
          <Avatar size={avatarSize} src={avatarURL} icon={<UserOutlined />} />
        </Tooltip>
      </Col>
      {(withName || withEmail) && (
        <Col px={0}>
          {withName && name && (
            <Row v="center" noGutters={!!props.vertical}>
              <Col>
                <Text>{name}</Text>
              </Col>
            </Row>
          )}
          {withEmail && email && (
            <Row v="center" noGutters={!!props.vertical}>
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
