import { Select } from 'antd'
import { Spinner } from 'components/Spinner'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { getCollectionRef } from 'app/services/Firestore'
import { COLLECTIONS } from 'app/constants'
import { style } from 'app/style'

const UserSelect = (props) => {
  // [INTERFACES]
  const { onChange } = props

  //[ADDITIONAL_HOOKS]
  const [users, loading] = useCollectionData(
    getCollectionRef(COLLECTIONS.USERS),
    { idField: 'id' }
  )
  //[COMPUTED_PROPERTIES]
  const dataForSelect =
    users &&
    users.map((user) => {
      const userDisplayName =
        user.firstName && user.surname && `${user.firstName} ${user.surname}`
      return {
        label: userDisplayName || user.email,
        value: user.id
      }
    })

  // [TEMPLATE]
  if (!users || loading) {
    return <Spinner />
  }
  return (
    <Select
      placeholder="Enter user"
      mode="multiple"
      onChange={onChange}
      style={style.fullWidth}
      options={dataForSelect}
      showArrow
    />
  )
}

export default UserSelect
