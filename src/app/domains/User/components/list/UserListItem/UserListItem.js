import { Col, Container, Row } from '@qonsoll/react-design'
import { UserSimpleView } from 'domains/User/components/views'
import { Button, Card, Popconfirm } from 'antd'
import { DeleteOutlined } from '@ant-design/icons'
import { useState } from 'react'
import Tag from 'components/Tags/Tags'

const UserListItem = (props) => {
  const {
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

  const showPopConfirm = () => {
    setVisible(!visible)
  }

  const handleOk = () => {
    setConfirmLoading(true)
    setTimeout(() => {
      setVisible(false)
      setConfirmLoading(false)
    }, 800)
  }

  const handleCancel = () => {
    setVisible(false)
  }
  return (
    <Container>
      <Card>
        <Row noGutters>
          <Col>
            <UserSimpleView
              avatarURL={avatarURL}
              name={`${firstName} ${surname}`}
              email={email}
              withName={withName}
              withEmail={withEmail}
            />
          </Col>
          <Col>
            <Tag status={leaveDayStatus} />
          </Col>
          <Col cw="auto">
            <Popconfirm
              title="Confirm"
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
