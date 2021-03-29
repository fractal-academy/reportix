import { Box, Col, Row } from '@qonsoll/react-design'
import { UserGroupView } from 'domains/User/components/views'
import { Button, Card, Popconfirm, Typography } from 'antd'
import { EditOutlined } from '@ant-design/icons'
import { ROUTES_PATHS } from 'app/constants'
import { useHistory } from 'react-router-dom'
import { useState } from 'react'

const { Title, Text } = Typography

const ProjectAdvancedView = (props) => {
  const { data } = props
  const history = useHistory()
  const [visible, setVisible] = useState(false)
  const [confirmLoading, setConfirmLoading] = useState(false)

  const showPopconfirm = () => {
    setVisible(true)
  }

  const handleOk = () => {
    setConfirmLoading(true)
    setTimeout(() => {
      setVisible(false)
      setConfirmLoading(false)
    }, 2000)
  }

  const handleCancel = () => {
    console.log('Clicked cancel button')
    setVisible(false)
  }

  return (
    <Card hoverable>
      <Row noGutters h="between">
        <Col>
          <Row noGutters>
            <Col cw="auto">
              <Title level={3}>{data.projectName}</Title>
            </Col>
          </Row>
          <Row noGutters h="between">
            <Col>
              <Row>
                <UserGroupView />
              </Row>
              {/*<Text strong>Company: </Text>*/}
              {/*<Text> {company}</Text>*/}
              {/*<Row>*/}
              {/*  <Text strong>Tasks: </Text>*/}
              {/*  <Text>{tasks || 'none'}</Text>*/}
              {/*</Row>*/}
              <Box>
                <Text>Users: {data.users || 'none'}</Text>
              </Box>
            </Col>
            <Col>
              <Box>
                <Text>Project start date: {data.start}</Text>
              </Box>
              <Box>
                <Text>Project end date: {data.end}</Text>
              </Box>
            </Col>
          </Row>
        </Col>
        <Col cw="auto">
          <Row noGutters>
            <Col mr={2}>
              <Button
                type="primary"
                icon={<EditOutlined />}
                onClick={() => {
                  history.push(ROUTES_PATHS.PROJECT_EDIT)
                }}>
                Edit
              </Button>
            </Col>
            <Col>
              <Popconfirm
                title="Delete this project?"
                visible={visible}
                onConfirm={handleOk}
                okButtonProps={{ loading: confirmLoading }}
                onCancel={handleCancel}>
                <Button danger onClick={showPopconfirm}>
                  Delete
                </Button>
              </Popconfirm>
            </Col>
          </Row>
        </Col>
      </Row>
    </Card>
  )
}
ProjectAdvancedView.defaultProps = {
  // project: 'Expences tracking app',
  // start: '2021/04/04',
  // end: '2021/04/04',
  // users: ['Sasha', 'Dima', 'Max']
}

export default ProjectAdvancedView
