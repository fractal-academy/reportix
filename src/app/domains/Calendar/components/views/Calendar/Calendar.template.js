import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import listPlugin from '@fullcalendar/list'
import interactionPlugin from '@fullcalendar/interaction'
import { Typography } from 'antd'
import {
  COLOR_CALENDAR,
  COLOR_CALENDAR_VALUE
} from 'app/constants/leaveDayColorPalette'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { getCollectionRef } from 'services/Firestore'
import COLLECTIONS from 'constants/collection'
import { Spinner } from 'components/Spinner'
import STATUS from 'constants/status'
const { Text } = Typography

const renderEventContent = (eventInfo) => {
  const { textColor } = COLOR_CALENDAR_VALUE.find(
    (color) => color.backgroundColor === eventInfo.event.backgroundColor
  )
  return <Text style={{ color: textColor }}>{eventInfo.event.title}</Text>
}

const CalendarAdvancedView = () => {
  const [events, loading] = useCollectionData(
    getCollectionRef(COLLECTIONS.LEAVE_DAYS)
  )

  if (!events || loading) {
    return <Spinner />
  }
  const editedEvents =
    events &&
    events.map((item) => {
      if (item.status === STATUS.APPROVED)
        return { ...item, end: item.end.toDate(), start: item.start.toDate() }
      else return []
    })
  return (
    <FullCalendar
      navLinks={true}
      firstDay={1}
      plugins={[dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin]}
      eventContent={renderEventContent}
      initialView="dayGridMonth"
      selectable={true}
      selectMirror={true}
      unselectAuto={true}
      dayMaxEvents={true}
      events={editedEvents}
      headerToolbar={{
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,listWeek'
      }}
    />
  )
}
export default CalendarAdvancedView
