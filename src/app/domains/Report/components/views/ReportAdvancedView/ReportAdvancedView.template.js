import { Row, Col, Box } from '@qonsoll/react-design'
import { Button, Typography, Table, Card, Divider } from 'antd'
import {
  EditOutlined,
  DownCircleTwoTone,
  UpCircleTwoTone
} from '@ant-design/icons'
import { style } from 'app/style'
import { UserSimpleView } from 'domains/User/components/views/UserSimpleView'
import { useHistory } from 'react-router'
import { ROUTES_PATHS } from 'app/constants'
import { useState } from 'react'

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
            <Col>
              <Row noGutters h="center">
                <Col cw="auto">
                  <Title level={4} style={style.resetMargin}>
                    TitleToday
                  </Title>
                </Col>
              </Row>
              <Row noGutters height="175px" overflow="auto">
                <Col>
                  <Box>1. Removed Calendar page</Box>
                </Col>
              </Row>
            </Col>
            <Col>
              <Row noGutters h="center">
                <Col cw="auto">
                  <Title level={4} style={style.resetMargin}>
                    TitleTomorrow
                  </Title>
                </Col>
              </Row>
              <Row noGutters height="175px" overflow="auto">
                <Col>
                  <Box>1. Fix header layout</Box>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row v="center" noGutters>
            <Col>
              <Row noGutters>
                <Col p={0}>
                  <Divider />
                </Col>
              </Row>
              <Row noGutters>
                <Col cw="auto">
                  <Title level={4} style={style.resetMargin}>
                    Blockers:
                  </Title>
                </Col>
                <Col pt={1}>
                  <Text> You, me, All of us</Text>
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
