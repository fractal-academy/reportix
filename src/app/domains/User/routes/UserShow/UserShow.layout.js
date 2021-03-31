import { UserAdvancedView } from 'domains/User/components/views'
import { Box, Container } from '@qonsoll/react-design'
import { useHistory, useParams } from 'react-router-dom'
import { useDocumentData } from 'react-firebase-hooks/firestore'
import { getCollectionRef } from 'app/services/Firestore'
import { Spinner } from 'components/Spinner'
import { useSession } from 'app/context/SesionContext'
import { generatePath } from 'react-router-dom'
import { ROUTES_PATHS, COLLECTIONS } from 'app/constants'
import { Button, Typography } from 'antd'
import { ArrowLeftOutlined } from '@ant-design/icons'

const { Title } = Typography

const UserShow = () => {
  // [ADDITIONAL_HOOKS]
  const { id } = useParams()
  const currentUser = useSession()
  const history = useHistory()

  if (id === ':id') {
    const id = currentUser.uid
    const userProfileLink = generatePath(ROUTES_PATHS.USER_SHOW, { id })
    history.push(userProfileLink)
  }

  const [userData, loading] = useDocumentData(
    getCollectionRef(COLLECTIONS.USERS).doc(id),
    { idField: 'id' }
  )
  if (loading || !userData) {
    return <Spinner />
  }
  return (
    <Container>
      <Box mt={4} mx={4} display="flex" alignItems="center">
        <Box mr={2}>
          <Button
            size="large"
            type="text"
            icon={<ArrowLeftOutlined />}
            onClick={() => history.goBack()}
          />
        </Box>

        <Title style={{ marginBottom: 0 }} level={3}>
          Profile
        </Title>
      </Box>
      <UserAdvancedView {...userData} />
    </Container>

    // {/* <UserFilterProfile /> */}
  )
}

export default UserShow
