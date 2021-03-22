import { Row, Col, Container, Box } from '@qonsoll/react-design'
import { Typography, Avatar } from 'antd'
import { MailOutlined, PhoneOutlined, UserOutlined } from '@ant-design/icons'
import { style } from './UserAdvancedView.styles'
import { UsersEdit } from 'domains/User/routes'

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
    surname
  } = props
  const name = firstName && surname ? `${firstName} ${surname}` : 'User'
  return (
    <Container>
      <Row mt={2} h="between">
        <Col>
          <Row>
            <Col cw={'auto'}>
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
                        <Text>None</Text>
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
  // email: 'okrdima@gmail.com',
  // phone: '+380671682029',s
  // // company: ['Senseteq'],
  // employedDate: '2021-03-03',
  // projectsNumber: '2',
  // avatarURL:
  //   'https://s.dou.ua/CACHE/images/img/events/65991023_663678084107355_736367396960337920_o/6402f87ec186fba0c3c98cd79a238296.png',
  avatarSize: 130
}
export default UserAdvancedView
