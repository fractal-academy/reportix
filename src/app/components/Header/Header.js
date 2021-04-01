import {
  PullRequestOutlined,
  UserOutlined,
  CalendarOutlined
} from '@ant-design/icons'
import { Menu, Typography, Grid, Dropdown } from 'antd'
import { Box } from '@qonsoll/react-design'
import { auth } from 'app/services/Firebase/firebase'
import { ROUTES_PATHS } from 'app/constants'
import { Link, useHistory, useLocation } from 'react-router-dom'
import { useSession } from 'app/context/SesionContext'
import { generatePath } from 'react-router-dom'
import { useDocumentData } from 'react-firebase-hooks/firestore'
import { getCollectionRef } from 'services/Firestore'
import COLLECTIONS from 'constants/collection'
import Avatar from 'antd/lib/avatar/avatar'

import { PAGES } from 'app/constants'

const { SubMenu } = Menu
const { useBreakpoint } = Grid

const Header = (props) => {
  const screens = useBreakpoint()
  const history = useHistory()
  const location = useLocation()
  const user = useSession()

  const id = user?.uid || 'id'

  // [COMPUTED_PROPERTIES]
  const userProfile = generatePath(ROUTES_PATHS.USER_SHOW, { id })

  const [userData] = useDocumentData(
    getCollectionRef(COLLECTIONS.USERS).doc(user?.uid),
    { idField: 'id' }
  )
  const userFullName =
    (userData?.firstName &&
      userData?.surname &&
      `${userData?.firstName} ${userData?.surname}`) ||
    null

  const avatarURL = userData?.avatarURL || user?.avatarURL

  const logout = () => {
    auth.signOut()
    history.push(ROUTES_PATHS.LOGIN)
  }

  const menuMap = [
    {
      title: 'Calendar',
      name: 'Calendar',
      key: '/calendar/:id',
      icon: <CalendarOutlined />
    },
    {
      title: 'Requests',
      name: 'Requests',
      key: '/requests',
      icon: <PullRequestOutlined />
    }
  ]

  return (
    <Box bg="#272042" display="flex" flex={1} flexDirection="column">
      <Box
        p={3}
        display="flex"
        alignItems="center"
        justifyContent={screens.md ? 'start' : 'center'}>
        <Link to={userData?.isAuthorize && '/'}>
          <Typography.Title
            level={4}
            id="logo1"
            style={{ color: '#fff', margin: 0 }}>
            {screens.md ? 'Vacation system' : 'VS'}
          </Typography.Title>
        </Link>
      </Box>
      {userData?.isAuthorize && (
        <Box>
          {user?.isAdmin ? (
            <Menu
              style={{ background: 'transparent' }}
              theme="dark"
              defaultSelectedKeys={history.location.pathname}>
              {PAGES.map((page, index) =>
                screens.md ? (
                  <Menu.Item
                    key={page.path}
                    icon={page.icon}
                    onClick={() => {
                      history.push(page.path)
                    }}>
                    {page.text}
                  </Menu.Item>
                ) : (
                  <Menu.Item
                    key={page.path}
                    icon={page.icon}
                    onClick={() => {
                      history.push(page.path)
                    }}
                  />
                )
              )}
            </Menu>
          ) : (
            <Menu
              style={{ background: 'transparent' }}
              theme="dark"
              selectedKeys={location.pathname}>
              {menuMap.map((item) =>
                screens.md ? (
                  <Menu.Item
                    key={item.key}
                    icon={item.icon}
                    onClick={() => {
                      history.push(item.key)
                    }}>
                    {item.name}
                  </Menu.Item>
                ) : (
                  <Menu.Item
                    key={item.key}
                    icon={item.icon}
                    onClick={() => {
                      history.push(item.key)
                    }}
                  />
                )
              )}
            </Menu>
          )}
        </Box>
      )}
      {screens.md ? (
        userData?.isAuthorize && (
          <Box mt="auto" style={{ marginTop: 'auto' }} mb={2}>
            <Menu
              style={{ background: 'transparent', padding: 0 }}
              theme="dark">
              <SubMenu
                title={
                  <Box display="flex" alignItems="center">
                    <Box mr={2}>
                      <Avatar src={avatarURL} icon={<UserOutlined />} />
                    </Box>

                    <Box
                      style={{ whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}
                      overflow="hidden">
                      {user?.displayName || userFullName || user?.email}
                    </Box>
                  </Box>
                }></SubMenu>
            </Menu>
          </Box>
        )
      ) : (
        <Box
          mt="auto"
          style={{ marginTop: 'auto' }}
          mb={2}
          display="flex"
          justifyContent="center">
          <Dropdown
            overlay={
              <Menu theme="dark" style={{ marginBottom: '-12px' }}>
                <Menu.Item
                  key="profile"
                  onClick={() => {
                    history.push(userProfile)
                  }}>
                  Profile
                </Menu.Item>
                <Menu.Item key="logout" onClick={logout}>
                  Logout
                </Menu.Item>
              </Menu>
            }
            placement="bottomCenter"
            trigger="click">
            <Avatar src={avatarURL} icon={<UserOutlined />} />
          </Dropdown>
        </Box>
      )}
    </Box>
  )
}

export default Header
