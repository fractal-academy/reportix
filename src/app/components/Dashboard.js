import { Button, Card } from 'antd'
import { auth } from '../services/Firebase/firebase'
import { useContext } from 'react'
import AuthContext from '../context/SesionContext'
import Title from 'antd/lib/typography/Title'

const Dashboard = () => {
  const { currentUser } = useContext(AuthContext)

  return (
    <Card>
      <Title>Dashboard</Title>
      <Title level={4}>Current user: {currentUser.email}</Title>
      <Button onClick={() => auth.signOut()}>Sign out</Button>
    </Card>
  )
}

export default Dashboard
