import { Box, Col, Container, Row } from '@qonsoll/react-design'
import { CommentSimpleForm } from 'domains/Comment/components/forms'
import { CommentList } from 'domains/Comment/components/list'
import { useState } from 'react'

const CommentListWithAdd = () => {
  // [TEMPLATE]
  const [comments, setComments] = useState([])
  const onSubmit = (data) => {
    console.log(data)
  }
  return (
    <Container>
      <Row noGutters>
        <Col>
          <Box mb={2}>
            <CommentSimpleForm onSubmit={onSubmit} />
          </Box>
          <CommentList comments={comments} />
        </Col>
      </Row>
    </Container>
  )
}
export default CommentListWithAdd
