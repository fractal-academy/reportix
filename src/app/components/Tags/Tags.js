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
import { Box } from '@qonsoll/react-design'
import { Typography } from 'antd'

const statusMap = {
  [LEAVE_DAY.WORK_FROM_HOME]: {
    type: LEAVE_DAY.WORK_FROM_HOME,
    color: '#00FFFF4D',
    icon: <HomeOutlined />
  },
  [LEAVE_DAY.VACATION]: {
    type: LEAVE_DAY.VACATION,
    color: '#fff0004D',
    icon: <GlobalOutlined />
  },
  [LEAVE_DAY.SWAP_DAY]: {
    type: LEAVE_DAY.SWAP_DAY,
    color: '#1890ff4D',
    icon: <SwapOutlined />
  },
  [LEAVE_DAY.SICK_DAY]: {
    type: LEAVE_DAY.SICK_DAY,
    color: '#e310044D',
    icon: <HeartOutlined />
  },
  [LEAVE_DAY.MONTH_REMOTE]: {
    type: LEAVE_DAY.MONTH_REMOTE,
    color: '#2477774D',
    icon: <CarOutlined />
  },
  [LEAVE_DAY.DAY_OFF]: {
    type: LEAVE_DAY.DAY_OFF,
    color: '#ad56104D',
    icon: <HomeOutlined />
  },
  [STATUS.REJECTED]: {
    type: STATUS.REJECTED,
    icon: <CloseCircleOutlined />,
    color: '#ff4d4f'
  },
  [STATUS.PENDING]: {
    type: STATUS.PENDING,
    icon: <SyncOutlined />,
    color: '#2081e2CC'
  },
  [STATUS.APPROVED]: {
    type: STATUS.APPROVED,
    icon: <CheckCircleOutlined />,
    color: '#17e222CC'
  },
  [STATUS.PAYED]: {
    type: STATUS.PAYED,
    icon: <CheckCircleOutlined />,
    color: 'success'
  }
}

const Tag = (props) => {
  const { status } = props

  return (
    <>
      {statusMap[status]?.type && (
        <Box
          // color={statusMap[status]?.color}
          display="flex"
          px={2}
          flex={1}
          justifyContent="center"
          borderRadius="4px"
          style={{ boxShadow: '0 4px 2px -2px rgba(0,0,0,0.25)' }}
          bg={`${statusMap[status]?.color}`}>
          <Box mr={2}>{statusMap[status]?.icon}</Box>
          <Typography.Text>{statusMap[status]?.type}</Typography.Text>
        </Box>
      )}
    </>
  )
}
export default Tag
