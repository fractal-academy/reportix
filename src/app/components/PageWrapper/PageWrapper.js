import { Divider, Typography, Menu } from 'antd'
import { Header } from 'components/Header'
import { Row, Col } from '@qonsoll/react-design'
import { style } from 'app/style'
import { useHistory } from 'react-router-dom'
import { PAGES } from 'app/constants'
import { useSession } from 'context/SesionContext'

const { Text } = Typography

const PageWrapper = (props) => {
  const { title, children } = props
  const history = useHistory()
  const user = useSession()
  console.log(user)

  return (
    <>
      <Row noGutters>
        <Col>
          <Header title={title} style={style.Header} />
          <Divider style={style.resetMargin} />
        </Col>
      </Row>

      <Row>
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
      </Row>
    </>
  )
}
export default PageWrapper
