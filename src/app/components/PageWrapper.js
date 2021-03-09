import { Divider } from 'antd'
import { Header, CustomMenu as Menu } from 'components'
import { Row, Col } from '@qonsoll/react-design'
import { PropTypes } from 'prop-types'
import { style } from 'app/style'

const PageWrapper = (props) => {
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
        <Col cw={[3, 3, 2]}>
          <Menu />
        </Col>
        <Col cw={10}>{children}</Col>
      </Row>
    </>
  )
}

PageWrapper.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element
}
export default PageWrapper
