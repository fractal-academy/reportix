import { CommentAdvancedView } from 'domains/Comment/components/views'

const CommentList = (props) => {
  // [INTERFACES]
  const { comments } = props

  // [TEMPLATE]
  return (
    <>
      {comments.map((item) => (
        <CommentAdvancedView
          commentTime={item.commentTime}
          userName={item.userName}
          // userAvatar={item.userAvatar}
          text={item.text}
          key={item.id}
        />
      ))}
    </>
  )
}

export default CommentList
