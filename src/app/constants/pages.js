import {
  CalendarOutlined,
  DeliveredProcedureOutlined,
  FileOutlined,
  ProjectOutlined,
  PullRequestOutlined,
  UsergroupAddOutlined
} from '@ant-design/icons'
import { ROUTES_PATHS } from 'app/constants'

const PAGES = [
  {
    text: 'Projects',
    path: ROUTES_PATHS.PROJECTS_ALL,
    icon: <ProjectOutlined />
  },
  {
    text: 'Users',
    path: ROUTES_PATHS.USERS_ALL,
    icon: <UsergroupAddOutlined />
  },
  {
    text: 'Reports',
    path: ROUTES_PATHS.REPORTS_ALL,
    icon: <DeliveredProcedureOutlined />
  }
]

export default PAGES
