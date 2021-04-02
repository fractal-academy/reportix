import ROUTES_PATHS from './routhPaths'
import { ReportsAll, ReportEdit } from 'domains/Report/routes'
import { CalendarShow } from 'domains/Calendar/routes'
import { CompanyShow } from 'domains/Company/routes'
import { ProjectsAll, ProjectEdit } from 'domains/Project/routes'
import { UsersAll, UserShow, UserCreate } from 'domains/User/routes'
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
  USER_CREATE: {
    component: UserCreate,
    path: ROUTES_PATHS.USER_CREATE
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
  }
}

const ROUTES_VALUE = Object.values(ROUTES)
const ROUTES_KEYS = Object.keys(ROUTES)

export default ROUTES
export { ROUTES_VALUE, ROUTES_KEYS }
