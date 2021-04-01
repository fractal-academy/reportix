import RequestList from 'domains/Request/components/list/RequestList'
import { Box, Container } from '@qonsoll/react-design'
import CalendarAddEvent from 'domains/Calendar/combined/CalendarAddEvent'
import { Button } from 'antd'
import { ArrowLeftOutlined } from '@ant-design/icons'
import Title from 'antd/es/typography/Title'
import { useHistory } from 'react-router-dom'
import { CalendarAddSickDay } from 'domains/Calendar/combined/CalendarAddSickDay'

const RequestsAllLayout = () => {
  const history = useHistory()
  return (
    <Container>
      <Box
        mt={4}
        mx={4}
        display="flex"
        alignItems="center"
        justifyContent="space-between">
        <Box display="flex" alignItems="center">
          <Box mr={2} display="flex" alignItems="center">
            <Button
              size="large"
              type="text"
              icon={<ArrowLeftOutlined />}
              onClick={() => history.goBack()}
            />
          </Box>
          <Title style={{ marginBottom: 0 }} level={3}>
            Requests
          </Title>
        </Box>
        <CalendarAddSickDay />
        <CalendarAddEvent />
      </Box>
      <Box mx={4}>
        <RequestList />
      </Box>
    </Container>
  )
}

export default RequestsAllLayout
