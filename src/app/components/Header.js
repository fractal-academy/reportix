import { BellOutlined, LeftOutlined } from '@ant-design/icons'
import { Typography, Dropdown, Menu } from 'antd'
import { Box, Row, Col } from '@qonsoll/react-design'
import { style } from 'app/style'
import { PropTypes } from 'prop-types'
import { UserSimpleView } from 'domains/user/components/views/UserSimpleView'
import { auth } from 'app/services/Firebase/firebase'
import { ROUTES_PATHS } from 'app/constants'
import { useHistory } from 'react-router'

const { Title, Text } = Typography

const Header = (props) => {
  const { title } = props
  const history = useHistory()

  const dropdownMenu = (
    <Menu>
      <Menu.Item
        key="0"
        onClick={() => {
          history.push(ROUTES_PATHS.USER_SHOW)
        }}>
        Profile
      </Menu.Item>
      <Menu.Item key="1" onClick={() => auth.signOut()}>
        Log Out
      </Menu.Item>
    </Menu>
  )
  return (
    <Row v="center" py={3} noGutters>
      <Col cw={[3, 3, 2]}>
        <Box
          textAlign="center"
          onClick={() => {
            history.push(ROUTES_PATHS.DASHBOARD)
          }}>
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
        <Row h="right">
          <Col cw="auto" v="center" px={3}>
            <Text>
              <BellOutlined style={style.iconSize} />
            </Text>
          </Col>
          <Col cw="auto" pr={4}>
            <Dropdown overlay={dropdownMenu} trigger={['click']} arrow>
              <Box onClick={(e) => e.preventDefault()}>
                <UserSimpleView withName={false} withEmail={false} />
              </Box>
            </Dropdown>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

Header.propTypes = {
  title: PropTypes.string
}
export default Header
