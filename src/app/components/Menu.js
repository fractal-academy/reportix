import { Menu, Typography, Divider } from 'antd'
import { PropTypes } from 'prop-types'
import { pages } from 'app/constants'

const { Text } = Typography

const CustomMenu = (props) => {
  return (
    <Menu>
      {pages.map((page, index) => (
        <>
          <Menu.Item id={index}>
            <Text>{page}</Text>
          </Menu.Item>
          <Divider style={{ margin: 0 }} />
        </>
      ))}
    </Menu>
  )
}
CustomMenu.propTypes = { pages: PropTypes.array }
export default CustomMenu
