import { Tag as AntTag } from 'antd'
import STATUS from 'app/constants/status'
import { LEAVE_DAY } from 'app/constants/leaveDay'
import {
  CarOutlined,
  CheckCircleOutlined,
  CloseCircleOutlined,
  GlobalOutlined,
  HeartOutlined,
  HomeOutlined,
  SwapOutlined,
  SyncOutlined
} from '@ant-design/icons'

const statusMap = [
  {
    type: LEAVE_DAY.WORK_FROM_HOME,
    color: 'magenta',
    icon: <HomeOutlined />
  },
  {
    type: LEAVE_DAY.VACATION,
    color: 'lime',
    icon: <GlobalOutlined />
  },
  {
    type: LEAVE_DAY.SWAP_DAY,
    color: 'gold',
    icon: <SwapOutlined />
  },
  {
    type: LEAVE_DAY.SICK_DAY,
    color: 'volcano',
    icon: <HeartOutlined />
  },
  {
    type: LEAVE_DAY.MONTH_REMOTE,
    color: 'cyan',
    icon: <CarOutlined />
  },
  {
    type: LEAVE_DAY.DAY_OFF,
    color: 'blue',
    icon: <HomeOutlined />
  },
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
