import { Row, Col, Box } from '@qonsoll/react-design'
import { Typography, Avatar, Divider } from 'antd'
import { MailOutlined, PhoneOutlined, UserOutlined } from '@ant-design/icons'
import { style } from './UserAdvancedView.styles'
import { UsersEdit } from 'domains/User/routes'
import { AccountsAll } from 'domains/Account/routes'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { getCollectionRef } from 'services/Firestore'
import COLLECTIONS from 'constants/collection'
import { useParams } from 'react-router-dom'

const { Text, Title } = Typography

const UserAdvancedView = (props) => {
  const {
    email,
    phone,
    employedDate,
    Company,
    avatarURL,
    avatarSize,
    firstName,
    surname,
    GitHubName,
    isAdmin
  } = props
  const { id } = useParams()

  const [userProjects, loading] = useCollectionData(
    getCollectionRef(COLLECTIONS.PROJECTS).where('users', 'array-contains', id)
  )
  const name = firstName && surname ? `${firstName} ${surname}` : 'No name'
  const projectsName =
    !loading && userProjects.map((project) => project.projectName).join(', ')
  return (
    <Box justifyContent="center" display="flex" flex={1} mt={4}>
      <Box
        p={3}
        bg="#fff"
        borderRadius="12px"
        style={{ boxShadow: '0 20px 24px -24px rgba(0,0,0,0.35)' }}>
        <Row h="center" noGutters>
          <Col cw={12}>
            <Box display="flex" justifyContent="flex-end">
              <UsersEdit />
            </Box>
          </Col>
          <Col cw={12} mb={1}>
            <Box display="flex" justifyContent="center" flex={1}>
              <Avatar
                src={avatarURL}
                size={avatarSize}
                icon={<UserOutlined />}
              />
            </Box>
          </Col>
          <Col cw={12} h="center" mb={1}>
            <Box display="flex" justifyContent="center" flex={1}>
              <Title style={{ marginBottom: 0 }} level={3}>
                {name}
              </Title>
            </Box>
          </Col>
          <Col cw={12} h="center">
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              flex={1}>
              <MailOutlined style={style.marginForIcon} />
              <Text>{email}</Text>
            </Box>
          </Col>
          <Col cw={12} h="center">
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              flex={1}>
              <PhoneOutlined style={style.marginForIcon} />
              <Text>{phone || 'No phone yet.'}</Text>
            </Box>
          </Col>
          {/*<Col cw={12} h="center">*/}
          {/*  <Box*/}
          {/*    display="flex"*/}
          {/*    justifyContent="center"*/}
          {/*    alignItems="center"*/}
          {/*    flex={1}>*/}
          {/*    <Text strong type="secondary">*/}
          {/*      {isAdmin ? 'Admin' : 'User'}*/}
          {/*    </Text>*/}
          {/*  </Box>*/}
          {/*</Col>*/}
        </Row>
        <Divider />
        <Row>
          <Col cw={12} mb={1}>
            <Text type="secondary" style={style.marginForIcon}>
              Company:
            </Text>
            <Text>{Company || 'none'}</Text>
          </Col>
          <Col cw={12} mb={1}>
            <Text type="secondary" style={style.marginForIcon}>
              Projects:
            </Text>
            <Text>{projectsName || 'none'}</Text>
          </Col>
          <Col cw={12}>
            <Text type="secondary" style={style.marginForIcon}>
              Employed:
            </Text>
            <Text>{employedDate || 'none'}</Text>
          </Col>
        </Row>
        <Divider />
        <Row>
          <Col cw={12} mb={1}>
            <AccountsAll GitHubName={GitHubName} />
          </Col>
        </Row>
      </Box>
    </Box>
  )
}
UserAdvancedView.defaultProps = {
  avatarSize: 130
}
export default UserAdvancedView
