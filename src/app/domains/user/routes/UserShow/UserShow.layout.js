import { UserAdvancedView } from 'domains/User/components/views'
import { UserFilterProfile } from 'domains/User/components/combine'
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
