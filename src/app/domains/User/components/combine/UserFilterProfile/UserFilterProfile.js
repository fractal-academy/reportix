import { Tabs } from 'antd'
import {
  UserOutlined,
  ProjectOutlined,
  PullRequestOutlined,
  LineChartOutlined,
  FileOutlined
} from '@ant-design/icons'
import { AccountsAll } from 'domains/Account/routes'
import { ProjectAdvancedView } from 'domains/Project/components/views'
import { RequestAdvancedView } from 'domains/Request/components/views'
import { InvoiceAdvancedView } from 'domains/Invoice/components/views'

const tabList = [
  {
    tabName: 'Accounts',
    icon: <UserOutlined />,
    content: <AccountsAll />
  },
  {
    tabName: 'Projects',
    icon: <ProjectOutlined />,
    content: <ProjectAdvancedView />
  },
  {
    tabName: 'Requests',
    icon: <PullRequestOutlined />,
    content: <RequestAdvancedView />
  },
  {
    tabName: 'Statistic',
    icon: <LineChartOutlined />,
    content: <>Statistic</>
  },
  {
    tabName: 'Invoices',
    icon: <FileOutlined />,
    content: <InvoiceAdvancedView />
  }
]

const { TabPane } = Tabs

const UserFilterProfile = () => {
  return (
    <Tabs centered size="large">
      {tabList.map((item, key) => (
        <TabPane
          tab={
            <>
              {item.icon}
              {item.tabName}
            </>
          }
          key={item.tabName}>
          {item.content}
        </TabPane>
      ))}
    </Tabs>
  )
}

export default UserFilterProfile