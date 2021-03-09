import { Button, Card } from 'antd'
import { auth } from '../services/Firebase/firebase'
import Title from 'antd/lib/typography/Title'
import { useSession } from '../context/SesionContext/useSession'

const Dashboard = () => {
  const { currentUser } = useSession()

  return (
    <Card>
      <Title>Dashboard</Title>
      <Title level={4}>Current user: {currentUser.email}</Title>
      <Button onClick={() => auth.signOut()}>Sign out</Button>
    </Card>
  )
}

export default Dashboard
