import { BellOutlined, LeftOutlined } from '@ant-design/icons'
import { Typography } from 'antd'
import { Box, Row, Col } from '@qonsoll/react-design'
import { style } from 'app/style'
import { PropTypes } from 'prop-types'
import { UserSimpleView } from 'domains/user/components/views/UserSimpleView'

const { Title, Text } = Typography

const Header = (props) => {
  const { title } = props
  return (
    <Row v="center" py={3} noGutters>
      <Col cw={[4, 3, 2]}>
        <Box textAlign="center">
          <Title level={3} style={style.resetMargin}>
            Logo
          </Title>
        </Box>
      </Col>
      <Col cw="auto">
        <Row noGutters>
          <Col cw="auto" v="center">
            <Text>
              <LeftOutlined style={style.iconSize} />
            </Text>
          </Col>
          <Col cw="auto" px={2}>
            <Title level={3} style={style.resetMargin}>
              {title}
            </Title>
          </Col>
        </Row>
      </Col>
      <Col px={4}>
        <Row h="right">
          <Col cw="auto" v="center" px={3}>
            <Text>
              <BellOutlined style={style.iconSize} />
            </Text>
          </Col>
          <Col cw="auto" pr={4}>
            <UserSimpleView size="xx-large" />
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

Header.propTypes = {
  title: PropTypes.string
}
export default Header
