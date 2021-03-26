import moment from 'moment'
import { Row, Col } from '@qonsoll/react-design'
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
    <Card size={'small'}>
      <Row mb={1} pt={2} h="between">
        <Col cw="auto">
          <UserSimpleView
            // avatarURL={userAvatar}
            name={userName}
            withEmail={false}
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
  )
}
CommentAdvancedView.defaultProps = {
  // user: {
  //   avatarURL:
  //     'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
  //   firstName: 'Dima',
  //   surname: 'Okrushko'
  // },
  // text: 'This is comments'
}

export default CommentAdvancedView
