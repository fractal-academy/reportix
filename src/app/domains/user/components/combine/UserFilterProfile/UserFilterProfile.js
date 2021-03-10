import { useState } from 'react'
import { Menu } from 'antd'
import { UserOutlined, ProjectOutlined } from '@ant-design/icons'

const UserFilterProfile = () => {
  // const { size } = props
  const [currentTab, setCurrentTab] = useState('Accounts')

  const handleClick = (e) => {
    console.log('click ', e.key)
    setCurrentTab(e.key)
  }
  return (
    <Menu onClick={handleClick} selectedKeys={currentTab} mode="horizontal">
      <Menu.Item key="Accounts" icon={<UserOutlined />}>
        Accounts
      </Menu.Item>
      <Menu.Item key="Projects" icon={<ProjectOutlined />}>
        Projects
      </Menu.Item>
    </Menu>
  )
}
UserFilterProfile.defaultProps = {
  size: 'small'
}
export default UserFilterProfile
