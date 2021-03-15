import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import listPlugin from '@fullcalendar/list'
import interactionPlugin from '@fullcalendar/interaction'
import { Typography } from 'antd'
import { LeaveDayColorPalette } from 'app/constants'
import { style } from './Calendar.style'
const { Text } = Typography
const { COLOR_LITE, COLOR_DARK, COLOR_DARK_VALUE } = LeaveDayColorPalette

const mockDayEvents = [
  {
    title: 'Makarov SwapDay',
    start: '2021-03-15',
    end: '2021-03-15',
    backgroundColor: COLOR_DARK.PERSIAN
  },
  {
    title: 'with extended props',
    start: '2021-03-01',
    end: '2021-03-05',
    backgroundColor: COLOR_LITE.CRAYOLA
  },
  {
    title: 'with extended props',
    start: '2021-03-01',
    end: '2021-03-05',
    backgroundColor: COLOR_LITE.ORANGE
  },
  {
    title: 'with extended props',
    start: '2021-03-01',
    end: '2021-03-05',
    backgroundColor: COLOR_LITE.PASTEL
  },
  {
    title: 'DayTop',
    start: '2021-03-05',
    end: '2021-03-05',
    backgroundColor: COLOR_DARK.CHARCOAL
  },
  {
    title: 'DayTop',
    start: '2021-03-05',
    end: '2021-03-05',
    backgroundColor: COLOR_DARK.PERSIAN
  },
  {
    title: 'DayTop',
    start: '2021-03-05',
    end: '2021-03-05',
    backgroundColor: COLOR_DARK.SIENNA
  }
]

const renderEventContent = (eventInfo) => {
  if (COLOR_DARK_VALUE.includes(eventInfo.event.backgroundColor))
    return (
      <Text style={style.colorForContrastText}>{eventInfo.event.title}</Text>
    )
  else return <Text>{eventInfo.event.title}</Text>
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
