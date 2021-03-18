import { Divider, Typography, Menu, Dropdown, Button } from 'antd'
import { Header } from 'components'
import { Row, Col, Box } from '@qonsoll/react-design'
import { PropTypes } from 'prop-types'
import { style } from 'app/style'
import { useHistory } from 'react-router'
import { PAGES, ROUTES_PATHS } from 'app/constants'

const { Text } = Typography

const PageWrapper = (props) => {
  const { title, children, imgPath, company } = props
  const history = useHistory()

  const dropDownMenu = (
    <Menu>
      <Menu.Item
        key="0"
        onClick={() => {
          history.push(ROUTES_PATHS.SETTINGS)
        }}>
        Settings
      </Menu.Item>
      <Menu.Item
        key="1"
        onClick={() => {
          // history.push(ROUTES_PATHS.NEW_COMPANY)
        }}>
        Create new
      </Menu.Item>
      <Divider />
      <Menu.Item>
        <Text>{company}</Text>
      </Menu.Item>
      <Menu.Item>
        <Text>Senseteq</Text>
      </Menu.Item>
      <Menu.Item>
        <Text>Senseteq</Text>
      </Menu.Item>
    </Menu>
  )

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
          <Dropdown
            overlay={dropDownMenu}
            placement="topLeft"
            trigger={'click'}
            style={{ position: 'absolute', bottom: '0' }}>
            <Button style={{ position: 'fixed', bottom: '10px' }}>
              <Box>
                <img src={imgPath} width="15px" height="15px" />
                {company}
              </Box>
            </Button>
          </Dropdown>
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
