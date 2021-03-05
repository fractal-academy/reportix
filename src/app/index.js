import { ThemeProvider } from '@qonsoll/react-design'
import Theme from '../config/theme'
import '../config/root.scss'
import 'antd/dist/antd.css'

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <div>Hello app</div>
    </ThemeProvider>
  )
}

export default App
