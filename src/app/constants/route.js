// import { withLayout } from 'app/components/HOCs/withLayout'
// import { SessionLogin } from 'domains/Session/routes'

import ROUTES_PATHS from './routhPaths'
import { Dashboard, PageExistError } from 'components'
import { ReportsAll, ReportEdit } from 'domains/Report/routes'
import { CalendarShow } from 'domains/Calendar/routes'
import { CompanyShow } from 'domains/Company/routes'
import { ProjectsAll } from 'domains/Project/routes'
import { StatisticsAll } from 'domains/Statistic/routes'
import { UserShow } from 'domains/User/routes'

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
  NOPAGE: {
    component: PageExistError,
    path: ROUTES_PATHS.NOPAGE,
    exact: true
  }
}

const ROUTES_VALUE = Object.values(ROUTES)
const ROUTES_KEYS = Object.keys(ROUTES)

export default ROUTES
export { ROUTES_VALUE, ROUTES_KEYS }
