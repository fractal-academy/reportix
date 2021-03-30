import { Row, Col, Container, Box } from '@qonsoll/react-design'
import { Typography, Avatar } from 'antd'
import { MailOutlined, PhoneOutlined, UserOutlined } from '@ant-design/icons'
import { style } from './UserAdvancedView.styles'
import { UsersEdit } from 'domains/User/routes'
import { AccountsAll } from 'domains/Account/routes'

const { Text, Title } = Typography

const UserAdvancedView = (props) => {
  const {
    email,
    phone,
    employedDate,
    company,
    projectsNumber,
    avatarURL,
    avatarSize,
    firstName,
    surname,
    GitHubName
  } = props
  const name = firstName && surname ? `${firstName} ${surname}` : 'User'
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
                      <Text>{phone ? phone : 'None'}</Text>
                    </Col>
                  </Row>
                  <Row v={'center'} noGutters mb={1}>
                    <Col cw={'auto'} mr={2}>
                      <Text type="secondary">Company:</Text>
                    </Col>
                    <Col>
                      {company ? (
                        company.map((item, index) => (
                          <Text key={index} {...item}>
                            {item} &nbsp;
                          </Text>
                        ))
                      ) : (
                        <Text>Senseteq</Text>
                      )}
                    </Col>
                  </Row>
                  {/*Employed*/}
                  <Row noOuterGutters>
                    <Col cw={'auto'}>
                      <Text type="secondary" style={style.marginForIcon}>
                        Employed:
                      </Text>
                      <Text>{employedDate ? employedDate : 'None'}</Text>
                    </Col>
                    <Col cw="auto">
                      <Text type="secondary" style={style.marginForIcon}>
                        Projects:
                      </Text>
                      <Text>{projectsNumber ? projectsNumber : 'None'}</Text>
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
