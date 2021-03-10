// import { withLayout } from 'app/components/HOCs/withLayout'
// import { SessionLogin } from 'domains/Session/routes'

import ROUTES_PATHS from './routhPaths'
import { Dashboard, PageExistError } from 'components'
import { Login, SignUp } from 'app/services/Auth'
import ProjectsAll from 'domains/project/routes/ProjectsAll'

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
  PROJECTS: {
    protect: [],
    component: ProjectsAll,
    path: ROUTES_PATHS.DASHBOARD,
    exact: true
  },
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
