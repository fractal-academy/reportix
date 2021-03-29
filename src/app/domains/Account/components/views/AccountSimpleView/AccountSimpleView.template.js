import { Row, Col } from '@qonsoll/react-design'
import { Typography, Button } from 'antd'
import { GithubOutlined, PlusCircleOutlined } from '@ant-design/icons'
const { Text } = Typography

const AccountSimpleView = (props) => {
  const { GitHubName, addAccount } = props

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
            ) : (
              <Button
                type="primary"
                shape="round"
                icon={<PlusCircleOutlined />}
                style={{ width: '100px' }}
                onClick={addAccount}
              />
            )}
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default AccountSimpleView
