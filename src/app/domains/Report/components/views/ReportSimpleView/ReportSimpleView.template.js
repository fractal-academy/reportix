import { Row, Col } from '@qonsoll/react-design'
import { Button, Typography, Table } from 'antd'
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
const { Column } = Table

const ReportSimpleView = (props) => {
  const { data } = props
  const { today, tomorrow } = data
  const [open, setOpen] = useState()
  const history = useHistory()
  return (
    <>
      <Row>
        <Col>
          <UserSimpleView withEmail={false} />
        </Col>
        <Col cw="auto">
          <Button
            type="primary"
            icon={<EditOutlined />}
            onClick={() => {
              history.push(ROUTES_PATHS.REPORTS_EDIT)
            }}>
            Edit
          </Button>
        </Col>
      </Row>
      {open && (
        <Row pt={2}>
          <Col>
            <Row>
              <Col>
                <Title level={3} style={style.resetMargin}>
                  Today
                </Title>
              </Col>
            </Row>
            <Row>
              <Col>
                <Table
                  dataSource={today}
                  size="small"
                  pagination={{ position: ['none', 'none'] }}>
                  <Column
                    title="Task name"
                    dataIndex="taskName"
                    key="taskName"
                  />
                  <Column title="Status" dataIndex="status" key="status" />
                </Table>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row>
              <Col>
                <Title level={3} style={style.resetMargin}>
                  Tomorrow
                </Title>
              </Col>
            </Row>
            <Row>
              <Col>
                <Table
                  dataSource={tomorrow}
                  size="small"
                  pagination={{ position: ['none', 'none'] }}>
                  <Column
                    title="Task TODO"
                    dataIndex="taskName"
                    key="taskName"
                  />
                  <Column title="Blocker" dataIndex="blocker" key="blocker" />
                </Table>
              </Col>
            </Row>
          </Col>
        </Row>
      )}
      <Row py={2} h="center" style={{ position: 'relative' }}>
        <Button
          type="primary"
          shape="circle"
          icon={open ? <UpCircleTwoTone /> : <DownCircleTwoTone />}
          style={{ position: 'absolute', top: '-1rem' }}
          onClick={() => {
            setOpen(!open)
          }}
        />
        <Col cw="auto">
          <Row h="center">
            <Col>
              <Title level={4} style={style.resetMargin}>
                19
              </Title>
            </Col>
          </Row>
          <Row h="center">
            <Col>
              <Text>Done</Text>
            </Col>
          </Row>
        </Col>
        <Col cw="auto">
          <Row>
            <Col>
              <Title level={4} style={style.resetMargin}>
                4
              </Title>
            </Col>
          </Row>
          <Row>
            <Col>
              <Text>In progress</Text>
            </Col>
          </Row>
        </Col>
        <Col cw="auto">
          <Row>
            <Col>
              <Title level={4} style={style.resetMargin}>
                28
              </Title>
            </Col>
          </Row>
          <Row>
            <Col>
              <Text>Hours spend</Text>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  )
}
export default ReportSimpleView
