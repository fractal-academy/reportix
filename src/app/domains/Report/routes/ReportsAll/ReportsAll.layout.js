import { ReportSimpleView } from 'domains/Report/components/views'
import { DatePicker, Button } from 'antd'
import { Row, Col, Box, Container } from '@qonsoll/react-design'
import { UserSelect } from 'domains/User/components/select'
import { ArrowLeftOutlined } from '@ant-design/icons'
import Title from 'antd/es/typography/Title'
import ProjectAddEvent from 'domains/Project/components/combined/ProjectAddEvent'
import { useHistory } from 'react-router-dom'
import ReportAdvancedForm from 'domains/Report/components/form/ReportAdvancedForm'

const reportMockData = [
  {
    today: [
      { taskName: 'add something', status: 'Done' },
      { taskName: 'remove something', status: 'In progress' },
      { taskName: 'edit something', status: 'Done' },
      { taskName: 'replace something', status: 'Done' }
    ],
    tomorrow: [
      { taskName: 'Планування', blocker: 'Я' },
      { taskName: 'редагування деяких компонент', blocker: 'Женя' },
      { taskName: 'Фікс конфліктів', blocker: 'Слава' },
      { taskName: 'Замінити таблиці на лісти', blocker: 'Максім' }
    ]
  },
  {
    today: [
      { taskName: 'add something', status: 'Done' },
      { taskName: 'remove something', status: 'In progress' },
      { taskName: 'edit something', status: 'Done' },
      { taskName: 'replace something', status: 'Done' }
    ],
    tomorrow: [
      { taskName: 'Планування', blocker: 'Я' },
      { taskName: 'редагування деяких компонент', blocker: 'Женя' },
      { taskName: 'Фікс конфліктів', blocker: 'Слава' },
      { taskName: 'Замінити таблиці на лісти', blocker: 'Максім' }
    ]
  },
  {
    today: [
      { taskName: 'add something', status: 'Done' },
      { taskName: 'remove something', status: 'In progress' },
      { taskName: 'edit something', status: 'Done' },
      { taskName: 'replace something', status: 'Done' }
    ],
    tomorrow: [
      { taskName: 'Планування', blocker: 'Я' },
      { taskName: 'редагування деяких компонент', blocker: 'Женя' },
      { taskName: 'Фікс конфліктів', blocker: 'Слава' },
      { taskName: 'Замінити таблиці на лісти', blocker: 'Максім' }
    ]
  },
  {
    today: [
      { taskName: 'add something', status: 'Done' },
      { taskName: 'remove something', status: 'In progress' },
      { taskName: 'edit something', status: 'Done' },
      { taskName: 'replace something', status: 'Done' }
    ],
    tomorrow: [
      { taskName: 'Планування', blocker: 'Я' },
      { taskName: 'редагування деяких компонент', blocker: 'Женя' },
      { taskName: 'Фікс конфліктів', blocker: 'Слава' },
      { taskName: 'Замінити таблиці на лісти', blocker: 'Максім' }
    ]
  },
  {
    today: [
      { taskName: 'add something', status: 'Done' },
      { taskName: 'remove something', status: 'In progress' },
      { taskName: 'edit something', status: 'Done' },
      { taskName: 'replace something', status: 'Done' }
    ],
    tomorrow: [
      { taskName: 'Планування', blocker: 'Я' },
      { taskName: 'редагування деяких компонент', blocker: 'Женя' },
      { taskName: 'Фікс конфліктів', blocker: 'Слава' },
      { taskName: 'Замінити таблиці на лісти', blocker: 'Максім' }
    ]
  }
]

const ReportsAll = (props) => {
  const history = useHistory()
  const { withFilter = true } = props
  const onSelectChange = (selected) => {
    //set data
  }
  const onDateChange = (date) => {
    /* Filter reports with date*/
    //console.log(date)
  }

  const onClickAll = () => {
    /*!!selectedItems ? setSelectedItems() : users && setSelectedItems(users)*/
  }

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
            Reports
          </Title>
        </Box>
      </Box>

      <Box mx={4} mt={3}>
        {withFilter && (
          <Row noGutters>
            <Col cw="auto">
              <Button type="primary" onClick={onClickAll}>
                All
              </Button>
            </Col>
            <Col ml={2}>
              <UserSelect
                onChange={onSelectChange}
                placeholder="Select users"
              />
            </Col>
            <Col cw="auto">
              <DatePicker onChange={onDateChange} />
            </Col>
          </Row>
        )}
      </Box>
      <Box mx={4} mt={3}>
        {reportMockData.map((report, index) => (
          <Row key={index} noGutters mb={3} style={{ background: 'white' }}>
            <Col>
              <ReportSimpleView data={report} />
            </Col>
          </Row>
        ))}
      </Box>
      <Box style={{ position: 'sticky', bottom: '0' }}>
        <ReportAdvancedForm />
      </Box>
    </Container>
  )
}

export default ReportsAll
