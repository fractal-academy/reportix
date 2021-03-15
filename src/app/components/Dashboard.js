import { Button } from 'antd'
import { auth } from 'app/services/Firebase/firebase'
import Title from 'antd/lib/typography/Title'
import { useSession } from 'app/context/SesionContext'
import { InvoiceAdvancedView } from 'domains/Invoice/components/views'
import { Box } from '@qonsoll/react-design'
import { LeaveDayFilter } from 'domains/LeaveDay/components/filter'
import { ProjectAdvancedView } from 'domains/Project/components/views'
import { RequestAdvancedView } from 'domains/Request/components/views'
import { UsersAll } from 'domains/User/routes'
import { CalendarMonth } from 'domains/Calendar/components/views'

const Dashboard = () => {
  const { currentUser } = useSession()

  return (
    <Box p={2}>
      <Title>Dashboard</Title>
      <CalendarMonth />
      {/*<UsersAll />*/}
      {/*<Title level={4}>Current user: {currentUser.email}</Title>*/}
      {/*<InvoiceAdvancedView status="Approved" />*/}
      {/*<LeaveDayFilter />*/}
      {/*<ProjectAdvancedView />*/}
      {/*<Button onClick={() => auth.signOut()}>Sign out</Button>*/}
      {/*<RequestAdvancedView />*/}
    </Box>
  )
}

export default Dashboard
