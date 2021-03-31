import { Box, Container } from '@qonsoll/react-design'
import ProjectList from 'domains/Project/components/list/ProjectList/ProjectList'
import { ArrowLeftOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import ProjectAddEvent from 'domains/Project/components/combined/ProjectAddEvent'
import Title from 'antd/es/typography/Title'
import { useHistory } from 'react-router-dom'
import { useSession } from 'context/SesionContext'

const ProjectsAll = () => {
  const history = useHistory()
  const user = useSession()
  return (
    <Container>
      <Box
        mt={4}
        mx={4}
        display="flex"
        alignItems="center"
        justifyContent="space-between">
        <Box display="flex" alignItems="center">
          <Box mr={2} display="flex" alignItems="center">
            <Button
              size="large"
              type="text"
              icon={<ArrowLeftOutlined />}
              onClick={() => history.goBack()}
            />
          </Box>
          <Title style={{ marginBottom: 0 }} level={3}>
            Projects
          </Title>
        </Box>
        {user?.isAdmin && <ProjectAddEvent />}
      </Box>
      <Box mx={4}>
        <ProjectList />
      </Box>
    </Container>
  )
}
export default ProjectsAll
