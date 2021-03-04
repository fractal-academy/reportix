import { Button, Card } from 'antd'

const Dashboard = ({ handleLogout }) => {
  return (
    <Card>
      <nav>
        <h2>Welcome</h2>
        <Button onClick={handleLogout}>Logout</Button>
      </nav>
    </Card>
  )
}

export default Dashboard
