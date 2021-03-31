import { Input } from 'antd'
const { Search } = Input

const UserListSearch = (props) => {
  const { onSubmit } = props
  // [TEMPLATE]
  return <Search placeholder="Search user" onSearch={onSubmit} enterButton />
}

export default UserListSearch
