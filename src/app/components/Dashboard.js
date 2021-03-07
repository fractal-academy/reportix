import { Button, Card } from 'antd'
import { auth } from '../services/Firebase/firebase'
import { useContext } from 'react'
import { useSession } from '../context/SesionContext'

const Dashboard = () => {
  const user = useSession()
  console.log('user', user)
  return (
    <Card>
      <h2>Dashboard</h2>

      <Button onClick={() => auth.signOut()}>Sign out</Button>
    </Card>
  )
}

export default Dashboard
