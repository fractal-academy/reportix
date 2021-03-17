// import { withLayout } from 'app/components/HOCs/withLayout'
// import { SessionLogin } from 'domains/Session/routes'

import ROUTES_PATHS from './routhPaths'
import { Dashboard, PageExistError } from 'components'
import { Login, SignUp } from 'app/services/Auth'
import { ReportsAll, ReportEdit } from 'domains/Report/routes'
import { CalendarShow } from 'domains/Calendar/routes'
import { CompanyShow } from 'domains/Company/routes'
import { ProjectsAll } from 'domains/Project/routes'
import { StatisticsAll } from 'domains/Statistic/routes'
import { UserShow } from 'domains/User/routes'

const ROUTES = {
  LOGIN: {
    component: Login,
    path: ROUTES_PATHS.LOGIN,
    exact: true
  },
  SIGN_UP: {
    component: SignUp,
    path: ROUTES_PATHS.SIGN_UP,
    exact: true
  },
  DASHBOARD: {
    protect: [],
    component: Dashboard,
    path: ROUTES_PATHS.DASHBOARD,
    exact: true
  },
  REPORTS_ALL: {
    protect: [
      /*'admin', 'user'*/
    ],
    component: ReportsAll,
    path: ROUTES_PATHS.REPORTS_ALL,
    exact: true
  },
  REPORT_EDIT: {
    protect: [
      /*'admin', 'user'*/
    ],
    component: ReportEdit,
    path: ROUTES_PATHS.REPORTS_EDIT,
    exact: true
  },
  CALENDAR_SHOW: {
    protect: [],
    component: CalendarShow,
    path: ROUTES_PATHS.CALENDAR_SHOW,
    exact: true
  },
  COMPANIES_SHOW: {
    protect: [],
    component: CompanyShow,
    path: ROUTES_PATHS.COMPANIES_SHOW,
    exact: true
  },
  PROJECTS_ALL: {
    protect: [],
    component: ProjectsAll,
    path: ROUTES_PATHS.PROJECTS_ALL,
    exact: true
  },
  STATISTIC_ALL: {
    protect: [],
    component: StatisticsAll,
    path: ROUTES_PATHS.STATISTICS_ALL,
    exact: true
  },
  USER_SHOW: {
    protect: [],
    component: UserShow,
    path: ROUTES_PATHS.USER_SHOW
  },
  //   PROJECTS: {
  //     protect: [],
  //     component: ProjectsAll,
  //     path: ROUTES_PATHS.DASHBOARD,
  //     exact: true
  //   },
  NOPAGE: {
    protect: [],
    component: PageExistError,
    path: ROUTES_PATHS.NOPAGE,

    exact: true
  }
}

const ROUTES_VALUE = Object.values(ROUTES)
const ROUTES_KEYS = Object.keys(ROUTES)

export default ROUTES
export { ROUTES_VALUE, ROUTES_KEYS }
