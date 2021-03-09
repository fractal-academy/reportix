import { Button, Card } from 'antd'
import { auth } from '../services/Firebase/firebase'
import Title from 'antd/lib/typography/Title'
import { useSession } from '../context/SesionContext'
import { Box } from '@qonsoll/react-design'

const Dashboard = () => {
  const { currentUser } = useSession()

  return (
    <Box p={4}>
      <Title>Dashboard</Title>
      <Title level={4}>Current user: {currentUser.email}</Title>
      <Button onClick={() => auth.signOut()}>Sign out</Button>
    </Box>
  )
}

export default Dashboard
