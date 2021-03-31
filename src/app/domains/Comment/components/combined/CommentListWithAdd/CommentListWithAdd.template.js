import { Box, Col, Container, Row } from '@qonsoll/react-design'
import { CommentSimpleForm } from 'domains/Comment/components/forms'
import { CommentList } from 'domains/Comment/components/list'
import { useState } from 'react'
import { useSession } from 'context/SesionContext'
import {
  useCollectionData,
  useDocumentData
} from 'react-firebase-hooks/firestore'
import { addData, getCollectionRef, getTimestamp } from 'services/Firestore'
import { COLLECTIONS } from 'constants/index'
import { Spin, message } from 'antd'

const CommentListWithAdd = (props) => {
  const { requestId } = props
  const currentUser = useSession()

  const [comments, isLoading] = useCollectionData(
    getCollectionRef(COLLECTIONS.COMMENTS)
      .where('requestId', '==', requestId)
      .orderBy('commentTime', 'desc'),
    { idField: 'id' }
  )
  const [userData, loading] = useDocumentData(
    getCollectionRef(COLLECTIONS.USERS).doc(currentUser.uid),
    { idField: 'id' }
  )
  // const dateFormat = 'MMMM Do YYYY'
  const onSubmit = async (data) => {
    try {
      await addData(COLLECTIONS.COMMENTS, {
        requestId: requestId,
        userName:
          userData?.firstName && userData?.surname
            ? `${userData?.firstName} ${userData?.surname}`
            : userData?.email,
        // userAvatar: userData?.avatarUrl,
        text: data,
        commentTime: getTimestamp().now()
      })
    } catch (e) {
      message.error(`Can't upload comment`)
    }
  }
  return (
    <Container>
      <Row noGutters>
        <Col>
          <Box>
            <CommentSimpleForm onSubmit={onSubmit} />
          </Box>
          {isLoading ? <Spin /> : <CommentList comments={comments} />}
        </Col>
      </Row>
    </Container>
  )
}
export default CommentListWithAdd
