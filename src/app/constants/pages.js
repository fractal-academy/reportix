import {
  CalendarOutlined,
  FileOutlined,
  ProjectOutlined,
  PullRequestOutlined,
  UsergroupAddOutlined
} from '@ant-design/icons'
import { ROUTES_PATHS } from 'app/constants/'

const PAGES = [
  {
    text: 'Calendar',
    path: ROUTES_PATHS.CALENDAR_SHOW,
    icon: <CalendarOutlined />
  },
  {
    text: 'Projects',
    path: ROUTES_PATHS.PROJECTS_ALL,
    icon: <ProjectOutlined />
  },
  { text: 'Reports', path: ROUTES_PATHS.REPORTS_ALL, icon: <FileOutlined /> },
  {
    text: 'Request',
    path: ROUTES_PATHS.REQUESTS_ALL,
    icon: <PullRequestOutlined />
  },
  {
    text: 'Users',
    path: ROUTES_PATHS.USERS_ALL,
    icon: <UsergroupAddOutlined />
  }
]

export default PAGES
