import { Box, Col, Row } from '@qonsoll/react-design'
import Text from 'antd/lib/typography/Text'
import { UserGroupView } from 'domains/User/components/views'
import { Button, Card, Popconfirm } from 'antd'
import { EditOutlined } from '@ant-design/icons'
import { ROUTES_PATHS } from '../../../../../constants'
import { useHistory } from 'react-router-dom'
import { useState } from 'react'

const ProjectAdvancedView = (props) => {
  const { company, project, tasks, startDate, deadline } = props
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
        <Col cw="auto">
          <UserGroupView />
          <Row my={2} noGutters>
            <Col cw="auto">
              <Text strong>Company: </Text>
              <Text> {company}</Text>
            </Col>
          </Row>
          <Row mb={2} noGutters>
            <Col>
              <Text strong>Projects: </Text>
              <Text>{project}</Text>
            </Col>
          </Row>
          <Row mb={2} noGutters>
            <Col>
              <Text strong>Tasks: </Text>
              <Text>{tasks || 'none'}</Text>
            </Col>
          </Row>
        </Col>
        <Col cw="auto" v={'end'}>
          <Box>
            <Text>Project start date: {startDate}</Text>
          </Box>
          <Box>
            <Text>Project end date: {deadline}</Text>
          </Box>
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
  company: 'Senseteq',
  project: 'Expences-tracking-app',
  tasks: '20',
  startDate: '2021/04/04',
  deadline: '2021/04/04'
}

export default ProjectAdvancedView
