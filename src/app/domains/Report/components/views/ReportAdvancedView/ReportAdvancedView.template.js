import { Row, Col, Box } from '@qonsoll/react-design'
import { Typography, Tag, Card, Divider } from 'antd'
import { EditOutlined } from '@ant-design/icons'
import { style } from 'app/style'
import { UserSimpleView } from 'domains/User/components/views/UserSimpleView'
import { useHistory } from 'react-router'
import { ROUTES_PATHS } from 'app/constants'
import { useState } from 'react'
import { TaskSimpleView } from 'app/domains/Task/components/views'

const { Text, Title } = Typography

const ReportAdvancedView = (props) => {
  return (
    <Card hoverable style={{ minHeight: '330px' }}>
      <Row noGutters>
        <Col cw="auto" style={{ position: 'relative' }}>
          <Row noGutters h="center">
            <Col cw="auto">
              <UserSimpleView
                avatarSize={100}
                name="Sasha Kazhuro"
                email="uhucbeucg@gmail.com"
                withName
                withEmail
                vertical
              />
            </Col>
          </Row>
          <Row style={{ position: 'absolute', bottom: 0 }} v="center" noGutters>
            <Col cw="auto">
              <Box>
                <Text>5 - Done</Text>
              </Box>
              <Box>
                <Text>7 - inProgress</Text>
              </Box>
              <Box>
                <Text>12h - time</Text>
              </Box>
            </Col>
          </Row>
        </Col>
        <Col cw="auto">
          <Divider style={{ height: '100%' }} type="vertical" />
        </Col>
        <Col>
          <Row noGutters v="center">
            <Col>
              <Box textAlign="center">
                <Title level={4} style={style.resetMargin}>
                  TitleToday
                </Title>
              </Box>
            </Col>
            <Col>
              <Box textAlign="center">
                <Title level={4} style={style.resetMargin}>
                  TitleTomorrow
                </Title>
              </Box>
            </Col>
          </Row>
          <Row noGutters height="250px" overflow="auto">
            <Col>
              <Row h="center" v="center" noGutters>
                <Col cw="auto">
                  <Tag color="lightgreen">Worktube</Tag>
                </Col>
              </Row>
              <Row noGutters>
                <Col>
                  <TaskSimpleView />
                </Col>
                {/* <Col><TaskSimpleView /></Col> */}
              </Row>
              <Row noGutters>
                <Col>
                  <TaskSimpleView />
                </Col>
                <Col>
                  <TaskSimpleView />
                </Col>
              </Row>
              <Row h="center" v="center" noGutters>
                <Col cw="auto">
                  <Tag color="lightblue">FOI</Tag>
                </Col>
              </Row>
              <Row noGutters>
                <Col>
                  <TaskSimpleView />
                </Col>
                <Col>
                  <TaskSimpleView />
                </Col>
              </Row>
              <Row noGutters>
                <Col></Col>
                <Col>
                  <TaskSimpleView />
                </Col>
              </Row>
              <Row h="center" v="center" noGutters>
                <Col cw="auto">
                  <Tag color="violet">Reportix</Tag>
                </Col>
              </Row>
              <Row noGutters>
                <Col>
                  <TaskSimpleView />
                </Col>
                <Col>
                  <TaskSimpleView />
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Card>
  )
}
export default ReportAdvancedView
