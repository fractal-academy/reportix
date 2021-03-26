import { CommentAdvancedView } from 'domains/Comment/components/views'

const CommentList = (props) => {
  // [INTERFACES]
  const { comments } = props

  // [TEMPLATE]
  return (
    <>
      {comments &&
        comments.map((item) => (
          <CommentAdvancedView
            commentTime={item.commentTime.toDate()}
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
