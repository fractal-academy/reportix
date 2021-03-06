// import { Button } from 'antd'
// import { auth } from 'app/services/Firebase/firebase'
import Title from 'antd/lib/typography/Title'
import { useSession } from 'app/context/SesionContext'
// import { InvoiceAdvancedView } from 'domains/Invoice/components/views'
import { Box } from '@qonsoll/react-design'
// import { LeaveDayFilter } from 'domains/LeaveDay/components/filter'
// import { ProjectAdvancedView } from 'domains/Project/components/views'
// import { RequestAdvancedView } from 'domains/Request/components/views'
import { UsersAll } from 'domains/User/routes'
// import { UserList } from 'domains/User/components/list'
// import RequestForm from 'domains/Request/components/form'
// import { AccountsAll } from 'domains/Account/routes'
import { Calendar } from 'domains/Calendar/components/views'
import CalendarAddEvent from 'app/domains/Calendar/combined/CalendarAddEvent'
import LeaveDaySingleSelect from 'domains/LeaveDay/components/select/LeaveDaySingleSelect'

const Dashboard = () => {
  const currentUser = useSession()
  return (
    <Box p={2}>
      <Title>Dashboard</Title>
      <Title level={4}>Current user: {currentUser?.email}</Title>
      <CalendarAddEvent />
      <LeaveDaySingleSelect />
      {/*<UsersAll />*/}
      {/*<UserList />*/}
      {/*<Calendar />*/}
      {/*<UsersAll />*/}
      {/*<Title level={4}>Current user: {currentUser.email}</Title>*/}
      {/*<InvoiceAdvancedView status="Approved" />*/}
      {/*<LeaveDayFilter />*/}
      {/*<ProjectAdvancedView />*/}
      {/*<Button onClick={() => auth.signOut()}>Sign out</Button>*/}
      {/*<RequestAdvancedView />*/}

      {/*<RequestForm />*/}
      {/*<AccountsAll />*/}
      {/*<InvoiceAdvancedView status="Approved" />*/}
      {/*<LeaveDayFilter />*/}
      {/*<ProjectAdvancedView />*/}
      {/*<RequestAdvancedView />*/}
      {/*<Button onClick={() => auth.signOut()}>Sign out</Button>*/}
    </Box>
  )
}

export default Dashboard
