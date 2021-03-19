import { UserAdvancedView } from 'domains/User/components/views'
import { UserFilterProfile } from 'domains/User/components/combine'
import { Box } from '@qonsoll/react-design'
import { useSession } from 'app/context/SesionContext'
import { useHistory, useParams } from 'react-router-dom'
import { useDocumentData } from 'react-firebase-hooks/firestore'
import { COLLECTIONS } from 'app/constants'
import { getCollectionRef } from 'app/services/Firestore'
import { Spinner } from 'components/Spinner'

const UserShow = () => {
  // [ADDITIONAL_HOOKS]
  const user = useSession()
  const { id } = useParams()
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
