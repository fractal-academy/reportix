import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import listPlugin from '@fullcalendar/list'
import interactionPlugin from '@fullcalendar/interaction'
import { Typography } from 'antd'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { getCollectionRef } from 'services/Firestore'
import COLLECTIONS from 'constants/collection'
import { Spinner } from 'components/Spinner'
import STATUS from 'constants/status'
const { Text } = Typography

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
        return {
          ...item,
          backgroundColor: '#E310044D',
          end: item.end.toDate(),
          start: item.start.toDate()
        }
      else return []
    })
  return (
    <FullCalendar
      navLinks
      firstDay={1}
      eventDrop={(e) => console.log(e)}
      plugins={[dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin]}
      eventContent={renderEventContent}
      initialView="dayGridMonth"
      selectable
      selectMirror
      allDayMaintainDuration
      unselectAuto
      editable
      dayMaxEvents
      events={editedEvents}
      headerToolbar={{
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,listWeek'
      }}
    />
  )
}

const renderEventContent = (eventInfo) => {
  return <Text>{eventInfo.event.title}</Text>
}

export default CalendarAdvancedView
