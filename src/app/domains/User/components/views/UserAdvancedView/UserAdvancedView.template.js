import { Row, Col, Container, Box } from '@qonsoll/react-design'
import { Typography, Avatar } from 'antd'
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
    GitHubName
  } = props
  const { id } = useParams()

  const [userProjects, loading] = useCollectionData(
    getCollectionRef(COLLECTIONS.PROJECTS).where('users', 'array-contains', id)
  )
  const name = firstName && surname ? `${firstName} ${surname}` : 'User'
  const projectsName =
    !loading && userProjects.map((project) => project.projectName).join(', ')
  return (
    <Container>
      <Row mt={2} h="between">
        <Col>
          <Row>
            <Col cw="auto">
              <Avatar
                src={avatarURL && avatarURL}
                size={avatarSize}
                icon={<UserOutlined />}
              />
            </Col>
            <Col cw="auto" px={0}>
              <Row maxWidth={500} noInnerGutters>
                <Col>
                  {/*UserName*/}
                  <Row mt={2} noGutters>
                    <Col>
                      <Title level={2}>{name}</Title>
                    </Col>
                  </Row>
                  <Row noOuterGutters mb={1}>
                    <Col cw={'auto'}>
                      <MailOutlined style={style.marginForIcon} />
                      <Text>{email}</Text>
                    </Col>
                    <Col cw="auto">
                      <PhoneOutlined style={style.marginForIcon} />
                      <Text>{phone ? phone : 'none'}</Text>
                    </Col>
                  </Row>
                  <Row v={'center'} noGutters mb={1}>
                    <Col cw={'auto'} mr={2}>
                      <Text type="secondary" style={style.marginForIcon}>
                        Company:
                      </Text>
                      <Text>{Company || 'none'}</Text>
                    </Col>
                  </Row>
                  {/*Employed*/}
                  <Row noOuterGutters>
                    <Col cw={'auto'}>
                      <Text type="secondary" style={style.marginForIcon}>
                        Employed:
                      </Text>
                      <Text>{employedDate || 'none'}</Text>
                    </Col>
                    <Col cw="auto">
                      <Text type="secondary" style={style.marginForIcon}>
                        Projects:
                      </Text>
                      <Text>{projectsName || 'none'}</Text>
                    </Col>
                  </Row>
                  <Row noGutters>
                    <Col>
                      <AccountsAll GitHubName={GitHubName} />
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col cw={'auto'}>
          <Box mr={2} mt={3}>
            <UsersEdit />
          </Box>
        </Col>
      </Row>
    </Container>
  )
}
UserAdvancedView.defaultProps = {
  avatarSize: 130
}
export default UserAdvancedView
