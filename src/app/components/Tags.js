import { Tag as AntTag } from 'antd'
import STATUS from '../constants/status'
import {
  CheckCircleOutlined,
  CloseCircleOutlined,
  SyncOutlined
} from '@ant-design/icons'

const statusMap = [
  {
    type: STATUS.REJECTED,
    icon: <CloseCircleOutlined />,
    color: 'error'
  },
  {
    type: STATUS.PENDING,
    icon: <SyncOutlined />,
    color: 'warning'
  },
  {
    type: STATUS.APPROVED,
    icon: <CheckCircleOutlined />,
    color: 'success'
  },
  {
    type: STATUS.PAYED,
    icon: <CheckCircleOutlined />,
    color: 'success'
  }
]

const Tag = (props) => {
  const { status } = props
  return (
    <>
      {statusMap.map((item, index) => {
        if (item.type === status)
          return (
            <AntTag key={index} icon={item.icon} color={item.color}>
              {item.type}
            </AntTag>
          )
      })}
    </>
  )
}
export default Tag
