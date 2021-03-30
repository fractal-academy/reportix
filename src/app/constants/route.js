import ROUTES_PATHS from './routhPaths'
import { ReportsAll, ReportEdit } from 'domains/Report/routes'
import { CalendarShow } from 'domains/Calendar/routes'
import { CompanyShow } from 'domains/Company/routes'
import { ProjectsAll, ProjectEdit } from 'domains/Project/routes'
import { UsersAll, UserShow } from 'domains/User/routes'
import { Settings } from 'components/Settings'
import { RequestsAll } from 'domains/Request/routes/RequestsAll'

const ROUTES = {
  REPORTS_ALL: {
    component: ReportsAll,
    path: ROUTES_PATHS.REPORTS_ALL,
    exact: true
  },
  REPORT_EDIT: {
    protect: [
      /*'admin', 'user'*/
    ],
    component: ReportEdit,
    path: ROUTES_PATHS.REPORT_EDIT,
    exact: true
  },
  CALENDAR_SHOW: {
    component: CalendarShow,
    path: ROUTES_PATHS.CALENDAR_SHOW,
    exact: true
  },
  COMPANIES_SHOW: {
    component: CompanyShow,
    path: ROUTES_PATHS.COMPANIES_SHOW,
    exact: true
  },
  PROJECTS_ALL: {
    component: ProjectsAll,
    path: ROUTES_PATHS.PROJECTS_ALL,
    exact: true
  },
  PROJECT_EDIT: {
    component: ProjectEdit,
    path: ROUTES_PATHS.PROJECT_EDIT,
    exact: true
  },
  USER_SHOW: {
    component: UserShow,
    path: ROUTES_PATHS.USER_SHOW
  },
  USERS_ALL: {
    protect: [],
    component: UsersAll,
    path: ROUTES_PATHS.USERS_ALL,
    exact: true
  },
  REQUESTS_ALL: {
    protect: [],
    component: RequestsAll,
    path: ROUTES_PATHS.REQUESTS_ALL,
    exact: true
  }
}

const ROUTES_VALUE = Object.values(ROUTES)
const ROUTES_KEYS = Object.keys(ROUTES)

export default ROUTES
export { ROUTES_VALUE, ROUTES_KEYS }
