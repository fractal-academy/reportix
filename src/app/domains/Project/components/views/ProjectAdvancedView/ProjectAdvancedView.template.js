import { Col, Row } from '@qonsoll/react-design'
import { UserGroupView } from 'domains/User/components/views'
import { Button, Card, message, Popconfirm, Typography } from 'antd'
import { COLLECTIONS } from 'app/constants'
import { useState } from 'react'
import { deleteData } from 'services/Firestore'
import { ProjectEdit } from 'domains/Project/routes'
import { DeleteOutlined } from '@ant-design/icons'

const { Title, Text } = Typography

const ProjectAdvancedView = (props) => {
  const { data, users } = props
  const [visible, setVisible] = useState(false)
  const [confirmLoading, setConfirmLoading] = useState(false)

  const showPopconfirm = () => {
    setVisible(true)
  }

  const handleOk = async () => {
    setConfirmLoading(true)
    try {
      await deleteData(COLLECTIONS.PROJECTS, data?.id)
    } catch (e) {
      message.error("Can't delete project")
    }

    setVisible(false)
    setConfirmLoading(false)
  }

  const handleCancel = () => {
    setVisible(false)
  }

  return (
    <Card hoverable>
      <Row noGutters h="between">
        <Col>
          <Row noGutters>
            <Col cw="auto">
              <Title level={3}>{data?.projectName}</Title>
            </Col>
          </Row>
          <Row noGutters h="between">
            <Col>
              {data?.users?.length ? (
                <UserGroupView users={users} userIds={data.users} />
              ) : (
                <Typography.Text type="secondary">
                  No employees yet
                </Typography.Text>
              )}
              <Row>
                <Col>
                  {data?.description ? (
                    <Text>Project description: {data?.description}</Text>
                  ) : (
                    <Text />
                  )}
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col cw="auto">
          <Row noGutters>
            <Col mr={2}>
              <ProjectEdit projectData={data} />
            </Col>
            <Col>
              <Popconfirm
                title="Delete this project?"
                visible={visible}
                onConfirm={handleOk}
                okButtonProps={{ loading: confirmLoading }}
                onCancel={handleCancel}>
                <Button
                  danger
                  onClick={showPopconfirm}
                  icon={<DeleteOutlined />}
                />
              </Popconfirm>
            </Col>
          </Row>
        </Col>
      </Row>
    </Card>
  )
}
ProjectAdvancedView.defaultProps = {}

export default ProjectAdvancedView
