import { Button, Card, Typography } from 'antd'
import { fbAuth } from '../services/Firebase/firebase'
import { useContext } from 'react'
import AuthContext from '../context/SesionContext'

const Dashboard = () => {
  const { currentUser } = useContext(AuthContext)

  return (
    <Card>
      <h2>Dashboard</h2>
      <h1>
        <Typography>Current user: {currentUser.email}</Typography>
      </h1>
      <Button onClick={() => fbAuth.signOut()}>Sign out</Button>
    </Card>
  )
}

export default Dashboard
