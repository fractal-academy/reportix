import { Select } from 'antd'
import { Spinner } from 'components/Spinner'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { getCollectionRef } from 'app/services/Firestore'
import { COLLECTIONS } from 'app/constants'
import { style } from 'app/style'

const UserSelect = (props) => {
  const { onChange } = props
  const [users, loading] = useCollectionData(
    getCollectionRef(COLLECTIONS.USERS),
    { idField: 'id' }
  )

  const dataForSelect =
    users &&
    users.map((user) => {
      if (user.firstName && user.surname)
        return { value: `${user.firstName} ${user.surname}` }
      return { value: user.email }
    })

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
