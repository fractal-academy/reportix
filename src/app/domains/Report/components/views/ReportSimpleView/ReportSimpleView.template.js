import { Row, Col } from '@qonsoll/react-design'
import { Button, Typography } from 'antd'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'
import { style } from 'app/style'
import { UserSimpleView } from 'app/domains/user/components/views/UserSimpleView'

const { Text, Title } = Typography

const mockTasksToday = [
  'add something',
  'remove something',
  'edit something',
  'replace something'
]
const mockTasksTomorrow = [
  'Планування',
  'редагування деяких компонент',
  'Фікс конфліктів',
  'Замінити таблиці на лісти'
]
const mockBlockers = ['Я', 'Женя', 'Руслан', 'Слава', 'Максім']

const ReportSimpleView = () => {
  return (
    <Row
      p={2}
      mb={3}
      noGutters
      border="1px solid lightgray"
      borderRadius="1rem">
      <Col>
        <Row>
          <Col cw="auto">
            <Row h="center" noGutters pb={2}>
              <Col>
                <UserSimpleView withEmail={false} />
              </Col>
            </Row>
            <Row>
              <Col>
                <Text>19 - done </Text>
              </Col>
            </Row>
            <Row>
              <Col>
                <Text>2 - in progress</Text>
              </Col>
            </Row>
            <Row>
              <Col>
                <Text>3 - hours spent</Text>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row noGutters>
              <Col cw="auto">
                <Row p={0}>
                  <Col>
                    <Title level={4} style={style.resetMargin}>
                      Today
                    </Title>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    {mockTasksToday.map((task, index) => (
                      <Row noGutters>
                        <Col>
                          <Text>- {task}</Text>
                        </Col>
                      </Row>
                    ))}
                  </Col>
                </Row>
              </Col>
              <Col>
                <Row>
                  <Col>
                    <Title level={4} style={style.resetMargin}>
                      Tomorrow
                    </Title>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    {mockTasksTomorrow.map((task, index) => (
                      <Row noGutters>
                        <Col>
                          <Text>- {task}</Text>
                        </Col>
                      </Row>
                    ))}
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row pt={2}>
              <Col>
                <Text strong>Blockers: </Text>
                <Text>{mockBlockers.join(', ')}</Text>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
      <Col cw="auto">
        <Button shape="circle" icon={<EditOutlined />} />
      </Col>
    </Row>
  )
}
export default ReportSimpleView
