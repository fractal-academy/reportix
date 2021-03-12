import { CommentAdvancedView } from 'domains/Comment/components/views'

const CommentList = (props) => {
  // [INTERFACES]
  const { comments } = props

  // [TEMPLATE]
  return (
    <>
      {comments.map((item) => (
        <CommentAdvancedView
          commentTime={item.date.toDate()}
          user={item.user}
          text={item.text}
          key={item.id}
        />
      ))}
    </>
  )
}

export default CommentList
