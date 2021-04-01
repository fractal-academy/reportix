import { Box, Col, Container, Row } from '@qonsoll/react-design'
import { UserSimpleView } from 'domains/User/components/views'
import { Button, Card, message, Popconfirm } from 'antd'
import { DeleteOutlined } from '@ant-design/icons'
import { useState } from 'react'
import Tag from 'components/Tags/Tags'
import { generatePath, useHistory } from 'react-router-dom'
import { COLLECTIONS, ROUTES_PATHS, STATUS } from 'app/constants'
import { deleteData } from 'services/Firestore'
import moment from 'moment'

const UserListItem = (props) => {
  const {
    id,
    avatarURL,
    firstName,
    surname,
    email,
    withName,
    withEmail,
    requests
  } = props
  const [visible, setVisible] = useState(false)
  const [confirmLoading, setConfirmLoading] = useState(false)
  const history = useHistory()
  const currentDay = Number(moment().format('x'))

  const requestsUser = requests.map((request) => {
    if (request.userId === id) return request
  })
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
            {requestsUser?.map((item, index) => (
              <Tag
                key={index}
                status={
                  item?.status !== STATUS.PENDING &&
                  item?.status !== STATUS.REJECTED &&
                  item?.start?.toDate().getTime() <= currentDay &&
                  currentDay <= item?.end?.toDate().getTime() &&
                  item?.leaveDayType
                }
              />
            ))}
          </Col>
          <Col cw="auto">
            <Popconfirm
              title="Delete user?"
              cancelText="No"
              okText="Yes"
              visible={visible}
              onConfirm={handleOk}
              okButtonProps={{ loading: confirmLoading }}
              onCancel={() => {
                setVisible(false)
              }}>
              <Button
                danger
                type="text"
                onClick={() => {
                  setVisible(!visible)
                }}
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
