import { Menu, Typography } from 'antd'
import { PropTypes } from 'prop-types'
import { PAGES } from 'app/constants'
import React from 'react'

const { Text } = Typography

const CustomMenu = () => {
  return (
    <Menu defaultSelectedKeys={PAGES[0]}>
      {PAGES.map((page, index) => (
        <React.Fragment key={index}>
          <Menu.Item>
            <Text>{page}</Text>
          </Menu.Item>
        </React.Fragment>
      ))}
    </Menu>
  )
}
CustomMenu.propTypes = { pages: PropTypes.array }
export default CustomMenu
