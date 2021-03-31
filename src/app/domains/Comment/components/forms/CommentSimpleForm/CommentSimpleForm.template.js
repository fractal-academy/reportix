import { Input } from 'antd'
import { SendOutlined } from '@ant-design/icons'
const { Search } = Input

const CommentSimpleForm = (props) => {
  const { onSubmit } = props
  // [TEMPLATE]
  return (
    <Search
      placeholder="Enter your comment"
      onSearch={onSubmit}
      enterButton={<SendOutlined />}
    />
  )
}

export default CommentSimpleForm
