import { Button } from 'antd'
import { auth } from 'app/services/Firebase/firebase'
import Title from 'antd/lib/typography/Title'
import { useSession } from 'app/context/SesionContext'
import { Box } from '@qonsoll/react-design'
import { ProjectAdvancedView } from 'domains/project/components/views/ProjectAdvancedView'
import { RequestAdvancedView } from 'domains/Request/components/views'
import { UserAdvancedView } from 'domains/user/components/views'
import { CommentAdvancedView } from 'domains/Comment/components/views'
import { CommentSimpleForm } from 'domains/Comment/components/forms'

const Dashboard = () => {
  const { currentUser } = useSession()

  return (
    <Box p={2}>
      <RequestAdvancedView />
      {/*<UserAdvancedView />*/}
      {/*<Title>Dashboard</Title>*/}
      {/*<Title level={4}>Current user: {currentUser.email}</Title>*/}
      {/*/!*<ProjectAdvancedView />*!/*/}
      {/*<Button onClick={() => auth.signOut()}>Sign out</Button>*/}
    </Box>
  )
}

export default Dashboard
