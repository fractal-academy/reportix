import { Card, Typography, Button } from 'antd'
import { Row, Box, Col } from '@qonsoll/react-design'
import { UserSimpleView } from 'domains/User/components/views'
import { CommentListWithAdd } from 'domains/Comment/components/combined'
import { Tags } from 'app/components'

const { Text, Title } = Typography

const RequestAdvancedView = (props) => {
  const {
    type,
    fromDate,
    toDate,
    description,
    firstStatus,
    secondStatus
  } = props
  return (
    <Card hoverable>
      <Row noGutters>
        <Col>
          <Row noOuterGutters mb={3}>
            <Col>
              <Row noGutters>
                <Col>
                  <Title level={2}>{type}</Title>
                  <UserSimpleView />
                  <Box justifyContent="space-between">
                    <Text type={'secondary'}>From: </Text>
                    <Text>{fromDate} </Text>
                    <Text type={'secondary'}>To: </Text>
                    <Text>{toDate} </Text>
                  </Box>
                  <Text type={'secondary'}>Description: </Text>
                  <Text>{description} </Text>
                </Col>
                <Col cw={'auto'}>
                  <Row v={'center'} noGutters>
                    <Col>
                      <UserSimpleView withName={false} withEmail={false} />
                    </Col>
                    <Col>
                      <Tags status={firstStatus} />
                    </Col>
                  </Row>
                  <Row v={'center'} noGutters>
                    <Col>
                      <UserSimpleView withName={false} withEmail={false} />
                    </Col>
                    <Col>
                      <Tags status={secondStatus} />
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row noGutters mb={2}>
            <Col mr={2} cw={'auto'}>
              <Button type={'primary'}>Approve</Button>
            </Col>
            <Col cw={'auto'}>
              <Button danger>Reject</Button>
            </Col>
          </Row>
          <Row noGutters mb={3}>
            <Col>
              <CommentListWithAdd />
            </Col>
          </Row>
        </Col>
      </Row>
    </Card>
  )
}

RequestAdvancedView.defaultProps = {
  type: 'Vacation',
  fromDate: '2021/04/03',
  toDate: '2021/04/24',
  description: 'Trip to Himalayas',
  firstStatus: 'Approved',
  secondStatus: 'Rejected'
}
export default RequestAdvancedView
