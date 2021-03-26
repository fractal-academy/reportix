import { ReportSimpleView } from 'domains/Report/components/views'
import { DatePicker, Button } from 'antd'
import { Row, Col, Box } from '@qonsoll/react-design'
import { ReportSimpleForm } from 'domains/Report/components/form'
import { UserSelect } from 'domains/User/components/select'
import { style } from 'app/style'

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

const ReportsAll = () => {
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
    <>
      <Row noGutters py={3} pr={2}>
        <Col cw="auto">
          <Button type="primary" onClick={onClickAll}>
            All
          </Button>
        </Col>
        <Col ml={2}>
          <UserSelect onChange={onSelectChange} placeholder="Select users" />
        </Col>
        <Col cw="auto">
          <DatePicker onChange={onDateChange} />
        </Col>
      </Row>
      <Row>
        <Col>
          {reportMockData.map((report, index) => (
            <Row key={index} noGutters mb={3} pr={2}>
              <Col
                py={3}
                noGutters
                border="1px solid lightgray"
                borderRadius="1rem">
                <ReportSimpleView data={report} />
              </Col>
            </Row>
          ))}
        </Col>
      </Row>
      <Box style={style.bottomFixed}>
        <ReportSimpleForm />
      </Box>
    </>
  )
}

export default ReportsAll
