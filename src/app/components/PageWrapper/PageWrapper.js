import { Divider, Typography, Menu, Dropdown, Button } from 'antd'
import { Header } from 'components/Header'
import { Row, Col, Box } from '@qonsoll/react-design'
import { PropTypes } from 'prop-types'
import { style } from 'app/style'
import { useHistory } from 'react-router'
import { PAGES, ROUTES_PATHS } from 'app/constants'

const { Text } = Typography

const PageWrapper = (props) => {
  const { title, children, imgPath, company } = props
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
          <Menu defaultSelectedKeys={history.location.pathname}>
            {PAGES.map((page, index) => (
              <Menu.Item
                key={page.path}
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
PageWrapper.defaultProps = {
  company: 'Senseteq',
  imgPath: '/senseteq.png'
}
export default PageWrapper
