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
import { ReportsAll } from 'domains/Report/routes'
import RequestList from 'domains/Request/components/list/RequestList'
import InvoiceList from 'domains/Invoice/components/list/InvoiceList'
import ProjectList from 'domains/Project/components/list/ProjectList'

const tabList = [
  {
    tabName: 'Accounts',
    icon: <UserOutlined />,
    content: <AccountsAll />
  },
  {
    tabName: 'Projects',
    icon: <ProjectOutlined />,
    content: <ProjectList />
  },
  {
    tabName: 'Requests',
    icon: <PullRequestOutlined />,
    content: <RequestList />
  },
  {
    tabName: 'Reports',
    icon: <FileOutlined />,
    content: <ReportsAll />
  },
  {
    tabName: 'Statistic',
    icon: <LineChartOutlined />,
    content: <>Statistic</>
  },
  {
    tabName: 'Invoices',
    icon: <FileOutlined />,
    content: <InvoiceList />
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
