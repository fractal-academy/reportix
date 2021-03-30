import { Row, Col } from '@qonsoll/react-design'
import { Typography, Button, Popconfirm, message } from 'antd'
import {
  GithubOutlined,
  PlusCircleOutlined,
  DeleteOutlined
} from '@ant-design/icons'
import { useSession } from 'context/SesionContext'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { auth } from 'services/Firebase'
import { updateData } from 'services/Firestore'
import COLLECTIONS from 'constants/collection'
const { Text } = Typography

const AccountSimpleView = (props) => {
  const { GitHubName, addAccount, providerId } = props
  const user = useSession()
  const { id } = useParams()
  const [confirmLoading, setConfirmLoading] = useState(false)
  const [visible, setVisible] = useState(false)
  const removeAccount = async () => {
    try {
      setConfirmLoading(true)
      await auth.currentUser.unlink(providerId)
      await updateData(COLLECTIONS.USERS, id, {
        GitHubName: null
      })
      setConfirmLoading(false)
      setVisible(false)
    } catch (e) {
      message.error("Can't remove account from GitHub")
    }
  }
  const myProfile = user.uid === id
  return (
    <Row noGutters py={2}>
      <Col>
        <Row noGutters v="center" h="center">
          <Col cw="auto" mr={2}>
            <GithubOutlined />
          </Col>
          <Col>
            <Text type="secondary">GitHub:</Text>
          </Col>
          <Col cw="auto">
            {GitHubName ? (
              <>
                <Text>{GitHubName}</Text>
                <Popconfirm
                  title="Unlink account?"
                  cancelText="No"
                  okText="Yes"
                  visible={visible}
                  onConfirm={removeAccount}
                  okButtonProps={{ loading: confirmLoading }}
                  onCancel={() => {
                    setVisible(false)
                  }}>
                  <Button
                    danger
                    shape="round"
                    type="text"
                    onClick={() => {
                      setVisible(!visible)
                    }}
                    icon={<DeleteOutlined />}
                  />
                </Popconfirm>
              </>
            ) : myProfile ? (
              <Button
                type="primary"
                shape="round"
                icon={<PlusCircleOutlined />}
                style={{ width: '100px' }}
                onClick={addAccount}
              />
            ) : (
              <Text>None</Text>
            )}
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default AccountSimpleView
