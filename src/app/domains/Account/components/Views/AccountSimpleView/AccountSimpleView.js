import { Row, Col, Box } from '@qonsoll/react-design'
import { Typography, Button } from 'antd'
import {
  CoffeeOutlined,
  EditOutlined,
  DeleteOutlined,
  PlusCircleOutlined
} from '@ant-design/icons'
import { style } from 'app/style'

const { Text } = Typography

const AccountSimpleView = (props) => {
  const { type, userName } = props
  return (
    <Row v="center" p={2}>
      <Col cw="auto" p={0}>
        <CoffeeOutlined />
      </Col>
      <Col cw="auto">
        <Text>{type}:</Text>
      </Col>
      {userName ? (
        <>
          <Col>
            <Text>{userName}</Text>
          </Col>
          <Col cw="auto">
            <Button type="primary" shape="circle" icon={<EditOutlined />} />
          </Col>
          <Col cw="auto" p={0}>
            <Button type="primary" shape="circle" icon={<DeleteOutlined />} />
          </Col>
        </>
      ) : (
        <Col>
          <Box textAlign="center">
            <Button
              type="primary"
              shape="round"
              icon={<PlusCircleOutlined />}
              style={style.fullWidth}
            />
          </Box>
        </Col>
      )}
    </Row>
  )
}

export default AccountSimpleView
