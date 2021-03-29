import { Button, Tabs } from 'antd'
import {
  ProjectOutlined,
  PullRequestOutlined,
  FileOutlined,
  AppstoreAddOutlined
} from '@ant-design/icons'
import { ReportsAll } from 'domains/Report/routes'
import RequestList from 'domains/Request/components/list/RequestList'
import ProjectList from 'domains/Project/components/list/ProjectList'
import { Col, Row } from '@qonsoll/react-design'
const { TabPane } = Tabs
const tabList = [
  {
    tabName: 'Requests',
    icon: <PullRequestOutlined />,
    content: <RequestList ownRequests />,
    addNew: true
  },

  {
    tabName: 'Reports',
    icon: <FileOutlined />,
    content: <ReportsAll />,
    addNew: true
  },

  {
    tabName: 'Projects',
    icon: <ProjectOutlined />,
    content: <ProjectList />,
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
              <Col cw="auto">
                <Button type="primary" icon={<AppstoreAddOutlined />}>
                  Add {item.tabName.slice(0, -1)}
                </Button>
              </Col>
            </Row>
          )}
          {item.content}
        </TabPane>
      ))}
    </Tabs>
  )
}

export default UserFilterProfile
