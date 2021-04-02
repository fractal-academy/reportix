import { ReportAdvancedView } from 'domains/Report/components/views/ReportAdvancedView'
import { Row, Col } from '@qonsoll/react-design'

const ReportShow = (props) => {
  const { data } = props
  return (
    <Row>
      <Col cw="auto">
        <ReportAdvancedView data={data} />
      </Col>
    </Row>
  )
}

export default ReportShow
