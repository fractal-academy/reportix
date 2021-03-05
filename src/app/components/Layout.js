import { Divider } from 'antd'
import { Header, CustomMenu as Menu } from 'components'
import { Row, Col } from '@qonsoll/react-design'
import { PropTypes } from 'prop-types'
import { style } from 'app/style'

const pages = [
  'Company dashboard',
  'Calendar',
  'Projects',
  'Reports',
  'Statistic'
]

const Layout = (props) => {
  const { title, children } = props
  return (
    <>
      <Row noGutters>
        <Col>
          <Header title={title} style={style.Header} />
          <Divider style={style.resetMargin} />
        </Col>
      </Row>
      <Row>
        <Col cw={[4, 3, 2]} px={3}>
          <Menu pages={pages} />
        </Col>
        <Col cw={10}>{children}</Col>
      </Row>
    </>
  )
}

Layout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element
}
export default Layout
