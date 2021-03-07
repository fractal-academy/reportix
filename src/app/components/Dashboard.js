import { Button, Card } from 'antd'
import { fbAuth } from '../services/Firebase/firebase'
import { useContext } from 'react'
import { AuthContext } from '../services/Auth'

const Dashboard = () => {
  const { currentUser } = useContext(AuthContext)

  return (
    <Card>
      <h2>Dashboard</h2>
      <h1>{currentUser.email}</h1>
      <Button onClick={() => fbAuth.signOut()}>Sign out</Button>
    </Card>
  )
}

export default Dashboard
