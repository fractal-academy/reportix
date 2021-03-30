import { Box, Col, Container, Row } from '@qonsoll/react-design'
import { UserSimpleView } from 'domains/User/components/views'
import { Button, Card, message, Popconfirm } from 'antd'
import { DeleteOutlined } from '@ant-design/icons'
import { useState } from 'react'
import Tag from 'components/Tags/Tags'
import { generatePath, useHistory } from 'react-router-dom'
import { COLLECTIONS, ROUTES_PATHS } from 'app/constants'
import { deleteData } from 'services/Firestore'

const UserListItem = (props) => {
  const {
    id,
    avatarURL,
    firstName,
    surname,
    email,
    withName,
    withEmail,
    leaveDayStatus
  } = props
  const [visible, setVisible] = useState(false)
  const [confirmLoading, setConfirmLoading] = useState(false)
  const history = useHistory()

  const showPopConfirm = () => {
    setVisible(!visible)
  }

  const handleOk = async () => {
    setConfirmLoading(true)
    try {
      await deleteData(COLLECTIONS.USERS, id)
    } catch (error) {
      message.error(`Can't delete ${firstName} ${surname}`)
    }
    setConfirmLoading(false)
    setVisible(!visible)
  }
  const userProfile = generatePath(ROUTES_PATHS.USER_SHOW, { id })

  const handleCancel = () => {
    setVisible(false)
  }
  return (
    <Container>
      <Card>
        <Row noGutters>
          <Col>
            <Box
              onClick={() => {
                history.push(userProfile)
              }}>
              <UserSimpleView
                avatarURL={avatarURL}
                name={firstName ? `${firstName} ${surname}` : 'User'}
                email={email}
                withName={withName}
                withEmail={withEmail}
              />
            </Box>
          </Col>
          <Col>
            <Tag status={leaveDayStatus} />
          </Col>
          <Col cw="auto">
            <Popconfirm
              title="Delete user?"
              cancelText="No"
              okText="Yes"
              visible={visible}
              onConfirm={handleOk}
              okButtonProps={{ loading: confirmLoading }}
              onCancel={handleCancel}>
              <Button
                danger
                type="text"
                onClick={showPopConfirm}
                icon={<DeleteOutlined />}
              />
            </Popconfirm>
          </Col>
        </Row>
      </Card>
    </Container>
  )
}
export default UserListItem
