import { LeftOutlined } from '@ant-design/icons'
import { Typography, Dropdown, Menu } from 'antd'
import { Box, Row, Col } from '@qonsoll/react-design'
import { style } from 'app/style'
import { UserSimpleView } from 'domains/User/components/views'
import { auth } from 'app/services/Firebase/firebase'
import { ROUTES_PATHS } from 'app/constants'
import { useHistory } from 'react-router-dom'
import { useSession } from 'app/context/SesionContext'
import { generatePath } from 'react-router-dom'

const { Title } = Typography

const Header = (props) => {
  const { title } = props
  const history = useHistory()
  const user = useSession()
  const id = user?.uid || 'id'
  const avatarURL = user?.photoURL
  // [COMPUTED_PROPERTIES]
  const userProfile = generatePath(ROUTES_PATHS.USER_SHOW, { id })

  const dropdownMenu = (
    <Menu>
      <Menu.Item
        key="0"
        onClick={() => {
          history.push(userProfile)
        }}>
        Profile
      </Menu.Item>
      <Menu.Item
        key="1"
        onClick={() => {
          auth.signOut()
          history.push(ROUTES_PATHS.LOGIN)
        }}>
        Log Out
      </Menu.Item>
    </Menu>
  )
  return (
    <Row v="center" py={3} noGutters>
      <Col cw={[3, 3, 2]}>
        <Box textAlign="center">
          <Title level={3} style={style.resetMargin}>
            Reportix
          </Title>
        </Box>
      </Col>
      <Col cw="auto">
        <Row noGutters>
          <Col cw="auto" v="center">
            <LeftOutlined
              style={style.iconSize}
              onClick={() => {
                history.goBack()
              }}
            />
          </Col>
          <Col cw="auto" px={2}>
            <Title level={3} style={style.resetMargin}>
              {title}
            </Title>
          </Col>
        </Row>
      </Col>
      <Col px={4}>
        <Row h="right" v="center">
          <Col cw="auto">
            <Dropdown overlay={dropdownMenu} trigger={['click']} arrow>
              <Box onClick={(e) => e.preventDefault()}>
                <UserSimpleView
                  withName={false}
                  withEmail={false}
                  avatarURL={avatarURL}
                />
              </Box>
            </Dropdown>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default Header
