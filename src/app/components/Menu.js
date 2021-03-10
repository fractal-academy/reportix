import { Menu, Typography } from 'antd'
import { PropTypes } from 'prop-types'
import { PAGES } from 'app/constants'
import { useHistory } from 'react-router-dom'
import React from 'react'

const { Text } = Typography

const CustomMenu = () => {
  const history = useHistory()
  return (
    <Menu defaultSelectedKeys={PAGES[0]}>
      {Object.keys(PAGES).map((page, index) => (
        <Menu.Item
          key={index}
          onClick={() => {
            history.push(PAGES[page])
          }}>
          <Text>{page}</Text>
        </Menu.Item>
      ))}
    </Menu>
  )
}
CustomMenu.propTypes = { pages: PropTypes.array }
export default CustomMenu
