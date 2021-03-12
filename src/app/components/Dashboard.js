import { Button } from 'antd'
import { auth } from 'app/services/Firebase/firebase'
import Title from 'antd/lib/typography/Title'
import { useSession } from 'app/context/SesionContext'
import InvoiceAdvancedView from 'domains/Invoice/components/view/InvoiceAdvancedView'
import { Box } from '@qonsoll/react-design'
import LeaveDayFilter from 'domains/LeaveDay/components/filter'
import { ProjectAdvancedView } from 'domains/project/components/views/ProjectAdvancedView'
import { RequestAdvancedView } from 'domains/Request/components/views'
import { UserList } from 'domains/user/components/list'

const Dashboard = () => {
  const { currentUser } = useSession()

  return (
    <Box p={2}>
      <UserList />
      <Title>Dashboard</Title>
      <Title level={4}>Current user: {currentUser.email}</Title>
      <InvoiceAdvancedView status="Approved" />
      <LeaveDayFilter />
      <ProjectAdvancedView />
      <Button onClick={() => auth.signOut()}>Sign out</Button>
      <RequestAdvancedView />
    </Box>
  )
}

export default Dashboard
