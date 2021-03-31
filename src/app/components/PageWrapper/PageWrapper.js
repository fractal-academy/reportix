import { Typography, Menu } from 'antd'
import { Header } from 'components/Header'
import { Row, Col, Box } from '@qonsoll/react-design'
import { style } from 'app/style'
import { useHistory } from 'react-router-dom'
import { PAGES } from 'app/constants'
import { useSession } from 'context/SesionContext'

const { Text } = Typography

const PageWrapper = (props) => {
  const { title, children } = props
  const history = useHistory()
  const user = useSession()

  return (
    <Box bg="#f6f6f6" display="flex" height="inherit" flex={1}>
      <Box bg="#272042" width="220px" display="flex" flexDirection="column">
        <Header title={title} style={style.Header} />
      </Box>

      <Box display="flex" flex={1}>
        {children}
      </Box>
      {/* <Row>
        {user?.isAdmin && (
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
        )}
        <Col>{children}</Col>
      </Row> */}
    </Box>
  )
}
export default PageWrapper
