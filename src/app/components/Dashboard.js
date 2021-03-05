import { Button, Card } from 'antd'
import { auth } from '../services/Firebase/firebase'
import { useContext } from 'react'
import { Redirect } from 'react-router-dom'

const Dashboard = () => {
  return (
    <Card>
      <h2>Dashboard</h2>
      <Button onClick={() => auth.signOut()}>Sign out</Button>
    </Card>
  )
}

export default Dashboard
