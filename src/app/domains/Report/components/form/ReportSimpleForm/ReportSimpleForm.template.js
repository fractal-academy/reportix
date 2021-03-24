import { Row, Col } from '@qonsoll/react-design'
import { ReportTable } from 'domains/Report/components/table'

const todayColumnsConfig = [
  {
    title: 'Today',
    dataIndex: 'today',
    width: '60%',
    editable: true
  },
  {
    title: 'Status',
    dataIndex: 'status',
    width: '25%',
    editable: true
  }
]

const tomorrowColumnsConfig = [
  {
    title: 'Tomorrow',
    dataIndex: 'tomorrow',
    width: '50%',
    editable: true
  },
  {
    title: 'Blockers',
    dataIndex: 'blockers',
    width: '30%',
    editable: true
  }
]

const ReportSimpleForm = () => {
  return (
    <Row>
      <Col>
        <ReportTable tableCols={todayColumnsConfig} />
      </Col>
      <Col>
        <ReportTable tableCols={tomorrowColumnsConfig} />
      </Col>
    </Row>
  )
}

export default ReportSimpleForm
