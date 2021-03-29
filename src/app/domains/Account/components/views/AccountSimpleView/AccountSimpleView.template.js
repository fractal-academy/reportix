import { Row, Col } from '@qonsoll/react-design'
import { Typography, Button } from 'antd'
import { GithubOutlined, PlusCircleOutlined } from '@ant-design/icons'
import { useSession } from 'context/SesionContext'
import { useParams } from 'react-router-dom'
const { Text } = Typography

const AccountSimpleView = (props) => {
  const { GitHubName, addAccount } = props
  const user = useSession()
  const { id } = useParams()
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
              <Text>{GitHubName}</Text>
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
