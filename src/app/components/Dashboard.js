import { Button } from 'antd'
import { auth } from 'app/services/Firebase/firebase'
import Title from 'antd/lib/typography/Title'
import { useSession } from 'app/context/SesionContext'
import { Box } from '@qonsoll/react-design'
import { ProjectAdvancedView } from 'domains/project/components/views/ProjectAdvancedView'

const Dashboard = () => {
  const { currentUser } = useSession()

  return (
    <Box p={2}>
      <Title>Dashboard</Title>
      <Title level={4}>Current user: {currentUser.email}</Title>
      <ProjectAdvancedView />
      <Button onClick={() => auth.signOut()}>Sign out</Button>
    </Box>
  )
}

export default Dashboard
