import moment from 'moment'
import { Row, Col, Box } from '@qonsoll/react-design'
import { Card, Typography } from 'antd'
import { UserSimpleView } from 'domains/User/components/views'
import { useEffect, useState } from 'react'

const { Text } = Typography

const CommentAdvancedView = (props) => {
  // [INTERFACES]
  const { commentTime, userName, userAvatar, text } = props
  // const { firstName, surname, avatarURL } = user

  // [COMPONENT_STATE_HOOKS]
  const [commentsDate, setCommentsDate] = useState(
    moment(commentTime).fromNow()
  )
  // [USE_EFFECTS]
  useEffect(() => {
    const updateTime = () => setCommentsDate(moment(commentTime).fromNow())

    //live comment date update
    const timer = setInterval(updateTime, 30000)

    return () => clearInterval(timer)
  }, [])

  // [TEMPLATE]
  return (
    <Box mb={2}>
      <Card size={'small'}>
        <Row mb={1} pt={2} h="between">
          <Col cw="auto" mb={1}>
            <UserSimpleView
              avatarURL={userAvatar}
              name={userName}
              withEmail={false}
              withName={true}
            />
          </Col>
          <Col cw="auto">
            {/*<Text type={'secondary'}>{commentsDate}</Text>*/}
          </Col>
        </Row>
        <Row>
          <Col px={2} pb={2}>
            <Text>{text}</Text>
          </Col>
          <Col cw="auto">{commentsDate}</Col>
        </Row>
      </Card>
    </Box>
  )
}
CommentAdvancedView.defaultProps = {}

export default CommentAdvancedView
