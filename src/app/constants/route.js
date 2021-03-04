// import { withLayout } from 'app/components/HOCs/withLayout'
// import { SessionLogin } from 'domains/Session/routes'

import ROUTES_PATHS from './routhPaths'
import { Dashboard } from 'components'
import { Login } from 'components'

const ROUTES = {
  LOGIN: {
    protect: [
      /*'admin', 'user'*/
    ],
    component: Login,
    path: ROUTES_PATHS.LOGIN,
    exact: true
  },
  DASHBOARD: {
    protect: [
      /*'admin', 'user'*/
    ],
    component: Dashboard,
    path: ROUTES_PATHS.DASHBOARD,
    exact: true
  }
}

const ROUTES_VALUE = Object.values(ROUTES)
const ROUTES_KEYS = Object.keys(ROUTES)

export default ROUTES
export { ROUTES_VALUE, ROUTES_KEYS }
