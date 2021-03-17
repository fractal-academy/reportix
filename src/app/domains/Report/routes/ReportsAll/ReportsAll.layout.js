import { ReportSimpleView } from 'domains/Report/components/views'
import { Input } from 'antd'
import { Row, Col } from '@qonsoll/react-design'

const { Search } = Input
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
  }
]

const ReportsAll = () => {
  const onSubmit = () => {}
  return (
    <>
      <Row noGutters>
        <Col py={3}>
          <Search
            placeholder="Search all user reports"
            onSearch={onSubmit}
            enterButton
          />
        </Col>
      </Row>
      {reportMockData.map((report, index) => (
        <Row key={index} noGutters>
          <Col
            py={3}
            mb={3}
            noGutters
            border="1px solid lightgray"
            borderRadius="1rem">
            <ReportSimpleView data={report} />
          </Col>
        </Row>
      ))}
    </>
  )
}

export default ReportsAll
