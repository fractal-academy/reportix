import { Button } from 'antd'
import { auth } from 'app/services/Firebase/firebase'
import Title from 'antd/lib/typography/Title'
import { useSession } from 'app/context/SesionContext'
import { Box } from '@qonsoll/react-design'
import PageWrapper from 'components/PageWrapper'

const Dashboard = () => {
  const { currentUser } = useSession()

  return (
    <PageWrapper>
      <Box p={2}>
        <Title>Dashboard</Title>
        <Title level={4}>Current user: {currentUser.email}</Title>
        <Button onClick={() => auth.signOut()}>Sign out</Button>
      </Box>
    </PageWrapper>
  )
}

export default Dashboard
