import { ThemeProvider } from '@qonsoll/react-design'
import Theme from '../config/theme'
import '../config/root.scss'
import 'antd/dist/antd.css'
import { Box } from '@qonsoll/react-design'

const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <Box>Hello</Box>
    </ThemeProvider>
  )
}

export default App
