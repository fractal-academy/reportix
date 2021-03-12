import { UserAdvancedView } from 'app/domains/user/components/views/UserAdvancedView'
import { UserFilterProfile } from 'domains/user/components/combine'
import { Box } from '@qonsoll/react-design'

const UserShow = () => {
  return (
    <>
      <Box mb={4}>
        <UserAdvancedView />
      </Box>
      <UserFilterProfile />
    </>
  )
}

export default UserShow
