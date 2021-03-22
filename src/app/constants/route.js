// import { withLayout } from 'app/components/HOCs/withLayout'
// import { SessionLogin } from 'domains/Session/routes'

import ROUTES_PATHS from './routhPaths'
import { Dashboard } from 'components'
import { ReportsAll, ReportEdit } from 'domains/Report/routes'
import { CalendarShow } from 'domains/Calendar/routes'
import { CompanyShow } from 'domains/Company/routes'
import { ProjectsAll, ProjectEdit } from 'domains/Project/routes'
import { StatisticsAll } from 'domains/Statistic/routes'
import { UsersAll, UserShow } from 'domains/User/routes'
import { Settings } from 'components/Settings'
import { InvoicesAll } from 'domains/Invoice/routes/InvoicesAll'
import { RequestsAll } from 'domains/Request/routes/RequestsAll'

const ROUTES = {
  DASHBOARD: {
    component: Dashboard,
    path: ROUTES_PATHS.DASHBOARD,
    exact: true
  },
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
  STATISTIC_ALL: {
    component: StatisticsAll,
    path: ROUTES_PATHS.STATISTICS_ALL,
    exact: true
  },
  USER_SHOW: {
    component: UserShow,
    path: ROUTES_PATHS.USER_SHOW
  },
  //   PROJECTS: {
  //     protect: [],
  //     component: ProjectsAll,
  //     path: ROUTES_PATHS.DASHBOARD,
  //     exact: true
  //   },
  SETTINGS: {
    protect: [],
    component: Settings,
    path: ROUTES_PATHS.SETTINGS,
    exact: true
  },
  USERS_ALL: {
    protect: [],
    component: UsersAll,
    path: ROUTES_PATHS.USERS_ALL,
    exact: true
  },
  INVOICES_ALL: {
    protect: [],
    component: InvoicesAll,
    path: ROUTES_PATHS.INVOICES_ALL,
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
