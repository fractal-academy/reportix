import { Row, Col, Box } from '@qonsoll/react-design'
import { Button, Typography, Table, Card, Divider } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
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
          <Row noGutters>
            <Col mr={1}>
              <Row noGutters h="center" v="center">
                <Col cw="auto">
                  <Title level={4} style={style.resetMargin}>
                    TitleToday
                  </Title>
                </Col>
              </Row>
              <Row noGutters height="250px" overflow="auto">
                <Col>
                  <Box>
                    <TaskSimpleView />
                  </Box>
                  <Box>
                    <TaskSimpleView />
                  </Box>
                  <Box>
                    <TaskSimpleView />
                  </Box>
                  <Box>
                    <TaskSimpleView />
                  </Box>
                  <Box>
                    <TaskSimpleView />
                  </Box>
                  <Box>
                    <TaskSimpleView />
                  </Box>
                  <Box>
                    <TaskSimpleView />
                  </Box>
                  <Box>
                    <TaskSimpleView />
                  </Box>
                  <Box>
                    <TaskSimpleView />
                  </Box>
                  <Box>
                    <TaskSimpleView />
                  </Box>
                  <Box>
                    <TaskSimpleView />
                  </Box>
                  <Box>
                    <TaskSimpleView />
                  </Box>
                </Col>
              </Row>
            </Col>
            <Col ml={1}>
              <Row noGutters h="center" v="center">
                <Col cw="auto">
                  <Title level={4} style={style.resetMargin}>
                    TitleTomorrow
                  </Title>
                </Col>
              </Row>
              <Row noGutters height="250px" overflow="auto">
                <Col>
                  <Box>
                    <TaskSimpleView />
                  </Box>
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
