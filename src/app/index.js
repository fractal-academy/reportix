import { ThemeProvider } from '@qonsoll/react-design'
import Theme from '../config/theme'
import '../config/root.scss'
import 'antd/dist/antd.css'
import { UserGroupView } from 'domains/user/components/views/UserGroupView'

const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <UserGroupView />
    </ThemeProvider>
  )
}

export default App
