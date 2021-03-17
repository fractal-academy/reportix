import { Divider, Typography, Menu } from 'antd'
import { Header } from 'components'
import { Row, Col } from '@qonsoll/react-design'
import { PropTypes } from 'prop-types'
import { style } from 'app/style'
import { useHistory } from 'react-router'
import { PAGES } from 'app/constants'

const { Text } = Typography

const PageWrapper = (props) => {
  const { title, children } = props
  const history = useHistory()
  return (
    <>
      <Row noGutters>
        <Col>
          <Header title={title} style={style.Header} />
          <Divider style={style.resetMargin} />
        </Col>
      </Row>
      <Row>
        <Col cw={[3, 3, 2]}>
          <Menu defaultSelectedKeys={PAGES[0]}>
            {PAGES.map((page, index) => (
              <Menu.Item
                key={index}
                onClick={() => {
                  history.push(page.path)
                }}>
                <Text>{page.text}</Text>
              </Menu.Item>
            ))}
          </Menu>
        </Col>
        <Col>{children}</Col>
      </Row>
    </>
  )
}

PageWrapper.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element
}
export default PageWrapper
