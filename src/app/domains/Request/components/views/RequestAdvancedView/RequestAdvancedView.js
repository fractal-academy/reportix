import { Card, Typography, Button, message } from 'antd'
import { Row, Box, Col } from '@qonsoll/react-design'
import { UserSimpleView } from 'domains/User/components/views'
import { CommentListWithAdd } from 'domains/Comment/components/combined'
import { Tags } from 'app/components'
import moment from 'moment'
import { useState } from 'react'
import { updateData } from 'services/Firestore'
import COLLECTIONS from 'constants/collection'
import STATUS from 'constants/status'
import { Spinner } from 'components/Spinner'

const { Text, Title } = Typography

const RequestAdvancedView = (props) => {
  const [loading, setLoading] = useState(false)

  const { data, withButtonAccept } = props
  const dateFormat = 'MMMM Do YYYY'
  const start = moment(data.start.toDate()).format(dateFormat)
  const end = moment(data.end.toDate()).format(dateFormat)

  const onApprove = async () => {
    setLoading(true)
    try {
      await updateData(COLLECTIONS.LEAVE_DAYS, data.id, {
        status: STATUS.APPROVED
      })
    } catch (e) {
      message.error(`Can't approve this leave day`)
    }
    setLoading(false)
  }

  const onReject = async () => {
    setLoading(true)
    try {
      await updateData(COLLECTIONS.LEAVE_DAYS, data.id, {
        status: STATUS.REJECTED
      })
    } catch (e) {
      message.error(`Can't approve this leave day`)
    }
    setLoading(false)
  }
  if (loading) <Spinner />

  return (
    <Card hoverable>
      <Row noGutters>
        <Col>
          <Row noOuterGutters mb={3}>
            <Col>
              <Row noGutters>
                <Col>
                  <Title level={3}>{data.title}</Title>
                  <Box justifyContent="space-between">
                    <Row noGutters>
                      <Text type={'secondary'}>From:</Text>
                      <Text> {start} </Text>
                    </Row>
                    <Row>
                      <Text type={'secondary'}>To: </Text>
                      <Text>{end} </Text>
                    </Row>
                  </Box>
                  <Text type={'secondary'}>Description: </Text>
                  <Text>{data.description} </Text>
                </Col>
                <Col cw={'auto'}>
                  <Row v={'center'} noGutters>
                    <Col>
                      <UserSimpleView withName={true} withEmail={false} />
                    </Col>
                    <Col>
                      <Tags status={data.status} />
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row noGutters mb={2}>
            {withButtonAccept && (
              <Col mr={2} cw={'auto'}>
                <Button type={'primary'} onClick={onApprove}>
                  Approve
                </Button>
              </Col>
            )}
            <Col cw={'auto'}>
              <Button danger onClick={onReject}>
                Reject
              </Button>
            </Col>
          </Row>
          <Row noGutters>
            <Col>
              {withButtonAccept && <CommentListWithAdd requestId={data.id} />}
            </Col>
          </Row>
        </Col>
      </Row>
    </Card>
  )
}

RequestAdvancedView.defaultProps = {}
export default RequestAdvancedView
