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
import { style } from './Calendar.style'
const { Text } = Typography

const mockDayEvents = [
  {
    title: 'Vacation',
    start: '2021-03-15',
    end: '2021-03-15',
    backgroundColor: COLOR_CALENDAR.LIME.backgroundColor
  },
  {
    title: 'Swap Day',
    start: '2021-03-01',
    end: '2021-03-05',
    backgroundColor: COLOR_CALENDAR.GOLD.backgroundColor
  },
  {
    title: 'Work from home',
    start: '2021-03-01',
    end: '2021-03-05',
    backgroundColor: COLOR_CALENDAR.MAGENTA.backgroundColor
  },
  {
    title: 'Month Remote',
    start: '2021-03-01',
    end: '2021-03-05',
    backgroundColor: COLOR_CALENDAR.CYAN.backgroundColor
  },
  {
    title: 'Day off',
    start: '2021-03-05',
    end: '2021-03-05',
    backgroundColor: COLOR_CALENDAR.BLUE.backgroundColor
  },
  {
    title: 'Sick Day',
    start: '2021-03-05',
    end: '2021-03-05',
    backgroundColor: COLOR_CALENDAR.VOLCANO.backgroundColor
  }
]

const renderEventContent = (eventInfo) => {
  const { textColor } = COLOR_CALENDAR_VALUE.find(
    (color) => color.backgroundColor === eventInfo.event.backgroundColor
  )
  return <Text style={{ color: textColor }}>{eventInfo.event.title}</Text>
}

const CalendarAdvancedView = () => {
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
      events={mockDayEvents}
      headerToolbar={{
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,listWeek'
      }}
    />
  )
}
export default CalendarAdvancedView
