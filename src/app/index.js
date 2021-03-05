import { ThemeProvider } from '@qonsoll/react-design'
import Theme from '../config/theme'
import '../config/root.scss'
import 'antd/dist/antd.css'
import { UserSimpleView } from 'domains/user/components/views/UserSimpleView'

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <UserSimpleView />
    </ThemeProvider>
  )
}

export default App
