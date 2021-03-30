import { Avatar, Tooltip } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import { Row, Col } from '@qonsoll/react-design'
import { style } from './UserGroupView.styles'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { getCollectionRef } from 'services/Firestore'
import COLLECTIONS from 'constants/collection'
import { Spinner } from 'components/Spinner'

const mockData = [
  {
    src: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
  },
  {
    src: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
  },
  {
    src: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
  },
  {
    src: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
  },
  {
    src: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
  }
]

const UserGroupView = (props) => {
  const { avatarSize, maxCount } = props
  const { users, userIds } = props
  // const [usersData, loading] = useCollectionData(
  //   getCollectionRef(COLLECTIONS.USERS),
  //   { idField: 'id' }
  // )
  // if (!usersData || loading) {
  //   return <Spinner />
  // }

  // console.log(usersData)

  const filteredData = users?.filter((user) => userIds.includes(user?.id))

  return (
    <Row v="center" noOuterGutters>
      <Col cw="auto">
        <Avatar.Group
          maxCount={maxCount}
          size={avatarSize}
          maxStyle={style.maxStyle}>
          {filteredData.map((item, index) => (
            <Tooltip
              title={
                item.firstName && item.surname
                  ? `${item.firstName} ${item.surname}`
                  : item.email
              }
              placement="top">
              <Avatar
                key={index}
                size={avatarSize}
                src={item.avatarURL}
                icon={<UserOutlined />}
              />
            </Tooltip>
          ))}
        </Avatar.Group>
      </Col>
    </Row>
  )
}
UserGroupView.defaultProps = {
  avatarSize: 'large',
  maxCount: 10
}
export default UserGroupView
