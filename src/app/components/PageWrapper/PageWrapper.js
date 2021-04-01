import { Header } from 'components/Header'
import { Box } from '@qonsoll/react-design'
import { style } from 'app/style'
import { Grid } from 'antd'

const { useBreakpoint } = Grid

const PageWrapper = (props) => {
  const { title, children } = props

  const screens = useBreakpoint()

  return (
    <Box bg="#f6f6f6" display="flex" height="inherit" flex={1}>
      <Box
        bg="#272042"
        width={screens.md ? '220px' : '50px'}
        display="flex"
        flexDirection="column">
        <Header title={title} style={style.Header} />
      </Box>

      <Box display="flex" flex={1} overflow="auto" max-height="100%">
        {children}
      </Box>
    </Box>
  )
}
export default PageWrapper
