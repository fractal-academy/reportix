import { Input } from 'antd'
import { SendOutlined } from '@ant-design/icons'
import { useState } from 'react'
const { Search } = Input

const CommentSimpleForm = (props) => {
  const { onSubmit } = props
  const [value, setValue] = useState('')

  const onFinish = (e) => {
    onSubmit && onSubmit(e)
    setValue('')
  }
  // [TEMPLATE]
  return (
    <Search
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder="Enter your comment"
      onSearch={onFinish}
      enterButton={<SendOutlined />}
    />
  )
}

export default CommentSimpleForm
