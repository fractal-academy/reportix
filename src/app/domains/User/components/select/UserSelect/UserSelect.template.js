import { Select } from 'antd'
import { Spinner } from 'components/Spinner'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { getCollectionRef } from 'app/services/Firestore'
import { COLLECTIONS } from 'app/constants'
import { style } from 'app/style'
import { useState } from 'react'

const UserSelect = (props) => {
  // [INTERFACES]
  const { onChange } = props

  //[ADDITIONAL_HOOKS]
  const [users, loading] = useCollectionData(
    getCollectionRef(COLLECTIONS.USERS),
    { idField: 'id' }
  )
  const [selected, setSelected] = useState(props?.users || null)

  console.log(props.users)
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

  const onSelect = (value) => {
    setSelected(value)
    onChange && onChange(value)
  }

  // [TEMPLATE]
  if (!users || loading) {
    return <Spinner />
  }
  return (
    <Select
      value={selected}
      placeholder="Enter user"
      mode="multiple"
      onChange={onSelect}
      style={style.fullWidth}
      options={dataForSelect}
      showArrow
    />
  )
}

export default UserSelect
