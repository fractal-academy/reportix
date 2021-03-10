import { UserAdvancedView } from 'app/domains/user/components/views/UserAdvancedView'
import { UserFilterProfile } from 'domains/user/components/combine'

const UserShow = () => {
  return (
    <>
      <UserAdvancedView />
      <UserFilterProfile />
    </>
  )
}

export default UserShow
