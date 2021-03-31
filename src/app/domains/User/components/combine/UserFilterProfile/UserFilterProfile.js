import { Tabs } from 'antd'
import {
  ProjectOutlined,
  PullRequestOutlined,
  FileOutlined,
  CalendarOutlined
} from '@ant-design/icons'
import { ReportsAll } from 'domains/Report/routes'
import RequestList from 'domains/Request/components/list/RequestList'
import ProjectList from 'domains/Project/components/list/ProjectList'
import { Col, Row } from '@qonsoll/react-design'
import CalendarAddEvent from 'domains/Calendar/combined/CalendarAddEvent'
const { TabPane } = Tabs
const tabList = [
  {
    tabName: 'Requests',
    icon: <PullRequestOutlined />,
    content: <RequestList ownRequests withButtonAccept={false} />,
    addNew: <CalendarAddEvent />
  },
  {
    tabName: 'Reports',
    icon: <FileOutlined />,
    content: <ReportsAll withFilter={false} />,
    addNew: true //change on component which can add new report
  },

  {
    tabName: 'Projects',
    icon: <ProjectOutlined />,
    content: <ProjectList ownProjects />,
    addNew: false
  }
]

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
          {item.addNew && (
            <Row h="right">
              <Col cw="auto">{item.addNew}</Col>
            </Row>
          )}
          {item.content}
        </TabPane>
      ))}
    </Tabs>
  )
}

export default UserFilterProfile
