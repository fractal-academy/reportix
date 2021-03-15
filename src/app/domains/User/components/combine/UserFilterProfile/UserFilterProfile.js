import { useState } from 'react'
import { Menu } from 'antd'
import {
  UserOutlined,
  ProjectOutlined,
  PullRequestOutlined,
  LineChartOutlined,
  FileOutlined
} from '@ant-design/icons'

const menuItem = [
  {
    nameMenuItem: 'Accounts',
    icon: <UserOutlined />
  },
  {
    nameMenuItem: 'Projects',
    icon: <ProjectOutlined />
  },
  {
    nameMenuItem: 'Requests',
    icon: <PullRequestOutlined />
  },
  {
    nameMenuItem: 'Statistic',
    icon: <LineChartOutlined />
  },
  {
    nameMenuItem: 'Invoices',
    icon: <FileOutlined />
  }
]

const UserFilterProfile = () => {
  // const { size } = props
  const [currentTab, setCurrentTab] = useState(menuItem[0].nameMenuItem)

  const handleClick = (e) => {
    setCurrentTab(e.key)
  }
  return (
    <Menu onClick={handleClick} selectedKeys={currentTab} mode="horizontal">
      {menuItem.map((item, index) => (
        <Menu.Item
          key={item.nameMenuItem}
          icon={item.icon}
          onClick={() => {
            //Todo change to function in map history.push()
            console.log(index)
          }}>
          {item.nameMenuItem}
        </Menu.Item>
      ))}
    </Menu>
  )
}
UserFilterProfile.defaultProps = {
  size: 'small'
}
export default UserFilterProfile
