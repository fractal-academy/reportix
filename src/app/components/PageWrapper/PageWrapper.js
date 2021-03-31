import { Header } from 'components/Header'
import { Box } from '@qonsoll/react-design'
import { style } from 'app/style'

const PageWrapper = (props) => {
  const { title, children } = props

  return (
    <Box bg="#f6f6f6" display="flex" height="inherit" flex={1}>
      <Box bg="#272042" width="220px" display="flex" flexDirection="column">
        <Header title={title} style={style.Header} />
      </Box>
      <Box display="flex" flex={1} overflow="auto" max-height="100%">
        {children}
      </Box>
    </Box>
  )
}
export default PageWrapper
