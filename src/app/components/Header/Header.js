import {
  FileOutlined,
  ProjectOutlined,
  PullRequestOutlined,
  UserOutlined
} from '@ant-design/icons'
import { Menu, Typography } from 'antd'
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

const Header = (props) => {
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
      `${user?.firstName} ${user?.surname}`) ||
    null

  const avatarURL = userData?.avatarURL || user?.avatarURL

  const logout = () => {
    auth.signOut()
    history.push(ROUTES_PATHS.LOGIN)
  }

  const menuMap = [
    {
      title: 'Requests',
      name: 'Requests',
      key: '/requests',
      icon: <PullRequestOutlined />
    },
    {
      title: 'Reports',
      name: 'Reports',
      key: '/reports',
      icon: <FileOutlined />
    },
    {
      title: 'Projects',
      name: 'Projects',
      key: '/projects',
      icon: <ProjectOutlined />
    }
  ]

  return (
    <Box
      bg="#272042"
      width="220px"
      display="flex"
      flex={1}
      flexDirection="column">
      <Box px={3} py={2}>
        <Link to="/">
          <img src="/logo-white.svg" alt="Qonsoll" height="40px" />
        </Link>
      </Box>
      <Box>
        {user?.isAdmin ? (
          <Menu
            style={{ background: 'transparent' }}
            theme="dark"
            defaultSelectedKeys={history.location.pathname}>
            {PAGES.map((page, index) => (
              <Menu.Item
                key={page.path}
                icon={page.icon}
                onClick={() => {
                  history.push(page.path)
                }}>
                {page.text}
              </Menu.Item>
            ))}
          </Menu>
        ) : (
          <Menu
            style={{ background: 'transparent' }}
            theme="dark"
            selectedKeys={location.pathname}>
            {menuMap.map((item) => (
              <Menu.Item
                key={item.key}
                icon={item.icon}
                onClick={() => {
                  history.push(item.key)
                }}>
                {item.name}
              </Menu.Item>
            ))}
          </Menu>
        )}
      </Box>
      <Box mt="auto" style={{ marginTop: 'auto' }} mb={2}>
        <Menu style={{ background: 'transparent', padding: 0 }} theme="dark">
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
            }>
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
          </SubMenu>
        </Menu>
      </Box>
    </Box>
  )
}

export default Header
