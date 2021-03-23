import { Button, Modal } from 'antd'
import { useState } from 'react'
import { Box } from '@qonsoll/react-design'

const CalendarAddEvent = () => {
  const [isModalVisible, setIsModalVisible] = useState(false)

  const showModal = () => {
    setIsModalVisible(true)
  }

  const handleOk = () => {
    setIsModalVisible(false)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal
        title="New LeaveDay request"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}>
        <Box borderRadius={8} border="1px solid red">
          qwe qwe qwe
        </Box>
      </Modal>
    </>
  )
}

export default CalendarAddEvent
