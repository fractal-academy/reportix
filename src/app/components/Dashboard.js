import { Button } from 'antd'
import { auth } from 'app/services/Firebase/firebase'
import Title from 'antd/lib/typography/Title'
import { useSession } from 'app/context/SesionContext'
import { Box, Col, Row } from '@qonsoll/react-design'
import { ProjectAdvancedView } from 'domains/project/components/views/ProjectAdvancedView'
import { Fragment } from 'react'

const Dashboard = () => {
  const { currentUser } = useSession()
  const projectsArr = [0, 1, 3]

  return (
    <Box p={2}>
      <Title>Dashboard</Title>
      <Title level={4}>Current user: {currentUser.email}</Title>
      <Button onClick={() => auth.signOut()}>Sign out</Button>
    </Box>
  )
}

export default Dashboard
