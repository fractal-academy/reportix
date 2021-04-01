import { Card, Typography, Button, message, Popconfirm } from 'antd'
import { Row, Box, Col } from '@qonsoll/react-design'
import { UserSimpleView } from 'domains/User/components/views'
import { CommentListWithAdd } from 'domains/Comment/components/combined'
import { Spinner, Tags } from 'app/components'
import { COLLECTIONS, STATUS } from 'constants'
import { updateData } from 'services/Firestore'
import { useSession } from 'context/SesionContext'
import { useState } from 'react'
import moment from 'moment'
import { LEAVE_DAY } from 'constants/leaveDay'

const { Text, Title } = Typography

const RequestAdvancedView = (props) => {
  //[INTERFACES]
  const { data, admin } = props
  //[STATE]
  const [loading, setLoading] = useState(false)
  const [visible, setVisible] = useState(false)
  const [confirmLoading, setConfirmLoading] = useState(false)

  //[ADDITIONAL_HOOKS]
  const currentUser = useSession()
  //[COMPUTED_PROPERTIES]
  const dateFormat = 'MMMM Do YYYY'
  const start = moment(data?.start?.toDate()).format(dateFormat)
  const end = moment(data?.end?.toDate()).format(dateFormat)

  console.log(data.status)
  //[HELPER_FUNCTIONS]
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
    setConfirmLoading(true)

    try {
      await updateData(COLLECTIONS.LEAVE_DAYS, data.id, {
        status: STATUS.REJECTED
      })
    } catch (e) {
      message.error(`Can't approve this leave day`)
    }
    setLoading(false)
    setConfirmLoading(false)
    setVisible(false)
  }
  if (loading) return <Spinner />
  //[TEMPLATE]
  return (
    <Card hoverable>
      <Row noGutters>
        <Col>
          <Row
            noGutters
            mb={
              ((data?.status === STATUS.PENDING && !currentUser?.isAdmin) ||
                currentUser?.isAdmin) &&
              3
            }>
            <Col>
              <Row noGutters>
                <Col>
                  <Title level={3}>{data.title}</Title>
                  <Box justifyContent="space-between">
                    <Row noGutters mb={1}>
                      <Col cw="auto" mr={2}>
                        <Text type={'secondary'}>From:</Text>
                      </Col>
                      <Col cw="auto">
                        <Text>{start}</Text>
                      </Col>
                    </Row>
                    <Row noGutters mb={1}>
                      <Col cw="auto" mr={2}>
                        <Text type={'secondary'}>To:</Text>
                      </Col>
                      <Col cw="auto">
                        <Text>{end}</Text>
                      </Col>
                    </Row>
                    <Row noGutters mb={1}>
                      <Col cw="auto" mr={2}>
                        <Text type={'secondary'}>Description:</Text>
                      </Col>
                      <Col cw="auto">
                        <Text>{data.description}</Text>
                      </Col>
                    </Row>
                  </Box>
                </Col>
                <Col cw={'auto'}>
                  <Row v={'center'} noGutters mb={4}>
                    <Col mr={2}>
                      <Tags status={data.status} />
                    </Col>
                    <Col>
                      <UserSimpleView
                        withEmail={false}
                        nameTooltip={
                          admin?.firstName &&
                          admin?.surname &&
                          `${admin?.firstName} ${admin?.surname}`
                        }
                        avatarURL={admin?.avatarURL}
                      />
                    </Col>
                  </Row>
                  <Row
                    h="right"
                    noGutters
                    mb={2}
                    display={
                      data?.status === STATUS.REJECTED && !currentUser?.isAdmin
                        ? 'none'
                        : 'flex'
                    }>
                    {/* {currentUser?.isAdmin && ( */}
                    <Col
                      mr={2}
                      cw={'auto'}
                      // display={
                      //   data?.status === STATUS.APPROVED ? 'none' : 'block'
                      // }
                    >
                      <Button
                        disabled={
                          data?.status === STATUS.APPROVED ||
                          !currentUser?.isAdmin
                        }
                        type={'primary'}
                        onClick={onApprove}>
                        Approve
                      </Button>
                    </Col>
                    {/* )} */}
                    {/* {data?.leaveDayType !== LEAVE_DAY.SICK_DAY && ( */}
                    <Col
                      cw={'auto'}
                      // display={
                      //   data?.status === STATUS.REJECTED ? 'none' : 'block'
                      // }
                    >
                      <Popconfirm
                        title="Reject request?"
                        cancelText="No"
                        okText="Yes"
                        visible={visible}
                        onConfirm={onReject}
                        okButtonProps={{ loading: confirmLoading }}
                        onCancel={() => {
                          setVisible(false)
                        }}>
                        <Button
                          disabled={
                            data?.leaveDayType !== LEAVE_DAY.SICK_DAY ||
                            data?.status === STATUS.REJECTED
                          }
                          danger
                          onClick={() => {
                            setVisible(!visible)
                          }}>
                          Reject
                        </Button>
                      </Popconfirm>
                    </Col>
                    {/* )} */}
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>

          {currentUser?.isAdmin && (
            <Row noGutters>
              <Col>
                <CommentListWithAdd requestId={data.id} />
              </Col>
            </Row>
          )}
        </Col>
      </Row>
    </Card>
  )
}

RequestAdvancedView.defaultProps = {}
export default RequestAdvancedView
