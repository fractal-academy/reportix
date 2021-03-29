import { UserAdvancedView } from 'domains/User/components/views'
import { UserFilterProfile } from 'domains/User/components/combine'
import { Box } from '@qonsoll/react-design'
import { useHistory, useParams } from 'react-router-dom'
import { useDocumentData } from 'react-firebase-hooks/firestore'
import { getCollectionRef } from 'app/services/Firestore'
import { Spinner } from 'components/Spinner'
import { useSession } from 'app/context/SesionContext'
import { generatePath } from 'react-router-dom'
import { ROUTES_PATHS, COLLECTIONS } from 'app/constants'

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
    <>
      <Box mb={4}>
        <UserAdvancedView {...userData} />
      </Box>
      <UserFilterProfile />
    </>
  )
}

export default UserShow
