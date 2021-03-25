import { Box, Col, Container, Row } from '@qonsoll/react-design'
import { CommentSimpleForm } from 'domains/Comment/components/forms'
import { CommentList } from 'domains/Comment/components/list'
import { useState } from 'react'
import { useSession } from 'context/SesionContext'
import {
  useCollectionData,
  useDocumentData
} from 'react-firebase-hooks/firestore'
import { addData, getCollectionRef } from 'services/Firestore'
import { COLLECTIONS } from 'constants/index'
import moment from 'moment'
import { CommentAdvancedView } from 'domains/Comment/components/views'
import { message } from 'antd'

const CommentListWithAdd = (props) => {
  const { requestId } = props
  const currentUser = useSession()
  // [TEMPLATE]
  // const [comments, setComments] = useState([])
  const [comments, isLoading] = useCollectionData(
    getCollectionRef(COLLECTIONS.COMMENTS).where('requestId', '==', requestId),
    {
      idField: 'id'
    }
  )

  const [userData, loading] = useDocumentData(
    getCollectionRef(COLLECTIONS.USERS).doc(currentUser.uid),
    { idField: 'id' }
  )
  // const dateFormat = 'MMMM Do YYYY'
  const onSubmit = async (data) => {
    const newComment = {
      requestId: requestId,
      userName:
        userData?.firstName && userData?.surname
          ? `${userData?.firstName} ${userData?.surname}`
          : userData?.email,
      // userAvatar: userData?.avatarUrl,
      text: data,
      commentTime: moment(new Date()).fromNow()
    }
    try {
      await addData(COLLECTIONS.COMMENTS, newComment)
    } catch (e) {
      // message.error(`Can't upload comment`)
      message.error(e)
    }
    // setComments([...comments, newComment])
    console.log(data)
  }
  return (
    <Container>
      <Row noGutters>
        <Col>
          <Box mb={2}>
            <CommentSimpleForm onSubmit={onSubmit} />
          </Box>
          {!isLoading && <CommentList comments={comments} />}
        </Col>
      </Row>
    </Container>
  )
}
export default CommentListWithAdd
