import { Button, message } from 'antd'
import { useState } from 'react'
import { COLOR_CALENDAR } from 'app/constants/leaveDayColorPalette'
import { addData, getCollectionRef, updateData } from 'services/Firestore'
import COLLECTIONS from 'constants/collection'
import { useSession } from 'context/SesionContext'
import STATUS from 'constants/status'
import { HeartFilled } from '@ant-design/icons'
import { LEAVE_DAY } from 'constants/leaveDay'
import { useCollectionData } from 'react-firebase-hooks/firestore'

const CalendarAddSickDay = () => {
  const user = useSession()
  const [sickDay, setSickDay] = useState(false)
  const [loading, setLoading] = useState(false)
  const name =
    user?.firstName && user?.surname && `${user?.firstName} ${user?.surname}`

  const [leaveDays] = useCollectionData(
    getCollectionRef(COLLECTIONS.LEAVE_DAYS)
      .where('userId', '==', user.uid)
      .where('finished', '==', false)
      .where('leaveDayType', '==', LEAVE_DAY.SICK_DAY),
    { idField: 'id' }
  )

  const onLeaveDayCreate = async () => {
    setLoading(true)
    try {
      await addData(COLLECTIONS.LEAVE_DAYS, {
        title: `${LEAVE_DAY.SICK_DAY}, ${name ? name : user.email}`,
        leaveDayType: LEAVE_DAY.SICK_DAY,
        start: new Date(),
        end: null,
        backgroundColor: COLOR_CALENDAR.VOLCANO.backgroundColor,
        borderColor: COLOR_CALENDAR.VOLCANO.backgroundColor,
        userId: user.uid,
        status: STATUS.APPROVED,
        finished: false
      })
      setSickDay(true)
    } catch (e) {
      message.error("Can't create Event")
    }
    setLoading(false)
  }
  const onLeaveDayFinish = async () => {
    setLoading(true)
    try {
      await updateData(COLLECTIONS.LEAVE_DAYS, leaveDays[0]?.id, {
        finished: true,
        end: new Date()
      })
      setSickDay(false)
    } catch (e) {
      setSickDay(false)
      message.error('Can`t finished Sick day')
    }
    setLoading(false)
  }
  return (
    <>
      {sickDay ? (
        <Button
          type="text"
          danger
          loading={loading}
          onClick={onLeaveDayFinish}
          icon={<HeartFilled />}>
          Finish Sick Day
        </Button>
      ) : (
        <Button
          type="text"
          danger
          loading={loading}
          onClick={onLeaveDayCreate}
          icon={<HeartFilled />}>
          Create Sick Day
        </Button>
      )}
    </>
  )
}

export default CalendarAddSickDay
