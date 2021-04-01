import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import listPlugin from '@fullcalendar/list'
import interactionPlugin from '@fullcalendar/interaction'
import { Button, Typography, message, Popconfirm, Grid, Tooltip } from 'antd'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { deleteData, getCollectionRef, updateData } from 'services/Firestore'
import COLLECTIONS from 'constants/collection'
import { Spinner } from 'components/Spinner'
import STATUS from 'constants/status'
import { Box } from '@qonsoll/react-design'
import { DeleteOutlined } from '@ant-design/icons'
import { useState } from 'react'
import moment from 'moment'
const { Text } = Typography

const { useBreakpoint } = Grid

const CalendarAdvancedView = () => {
  const screens = useBreakpoint()
  const [events, loading] = useCollectionData(
    getCollectionRef(COLLECTIONS.LEAVE_DAYS),
    { idField: 'id' }
  )
  const updateEventData = async (event) => {
    try {
      await updateData(COLLECTIONS.LEAVE_DAYS, event.event._def.publicId, {
        start: new Date(event.event._instance.range.start),
        end: new Date(event.event._instance.range.end)
      })
    } catch (e) {
      message.error('Can`t move event')
    }
  }
  if (!events || loading) {
    return <Spinner />
  }
  const editedEvents =
    events &&
    events.map((item) => {
      if (item.status === STATUS.APPROVED)
        return {
          ...item,
          end:
            item.leaveDayType === 'Sick day' && !item.finished
              ? moment(new Date()).toDate()
              : item.end.toDate(),
          start: item.start.toDate()
        }
      else return []
    })

  return (
    <FullCalendar
      navLinks
      firstDay={1}
      eventDrop={updateEventData}
      plugins={[dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin]}
      eventContent={(e) => <RenderEventContent {...e} />}
      initialView={screens.md ? 'dayGridMonth' : 'listWeek'}
      selectable
      selectMirror
      allDayMaintainDuration
      unselectAuto
      editable
      buttonText={{
        today: 'Current month',
        month: 'Month',
        list: 'Week'
      }}
      dayMaxEvents
      events={editedEvents}
      headerToolbar={{
        left: 'title',
        // center: 'title'
        right: 'prev,next'
      }}
    />
  )
}

export default CalendarAdvancedView

const RenderEventContent = (eventInfo) => {
  const [visible, setVisible] = useState(false)
  const handleOk = async (data) => {
    try {
      await deleteData(COLLECTIONS.LEAVE_DAYS, eventInfo.event._def.publicId)
    } catch (error) {
      message.error('Can`t delete event')
    }
    setVisible(!visible)
  }
  return (
    <Box display="flex" justifyContent="space-between" alignItems="center">
      <Tooltip
        placement="top"
        title={eventInfo.event._def.extendedProps.leaveDayType}>
        <Text
          style={{
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            overflow: 'hidden'
          }}>
          {eventInfo.event.title}
        </Text>
      </Tooltip>
      <Popconfirm
        title="Delete user?"
        cancelText="No"
        okText="Yes"
        visible={visible}
        onConfirm={handleOk}
        onCancel={() => {
          setVisible(false)
        }}>
        <Button
          size="small"
          type="text"
          danger
          icon={<DeleteOutlined />}
          onClick={() => {
            setVisible(!visible)
          }}
        />
      </Popconfirm>
    </Box>
  )
}
