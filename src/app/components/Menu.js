import { Menu, Typography, Divider } from 'antd'
import { PropTypes } from 'prop-types'

const { Text } = Typography

const CustomMenu = (props) => {
  const { pages } = props

  return (
    <>
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
    </>
  )
}
CustomMenu.propTypes = { pages: PropTypes.array }
export default CustomMenu
