import { ReportSimpleView } from 'domains/Report/components/views/ReportSimpleView'
import { Row, Col } from '@qonsoll/react-design'

const ReportShow = (props) => {
  const { data } = props
  return (
    <Row>
      <Col cw="auto">
        <ReportSimpleView data={data} />
      </Col>
    </Row>
  )
}

export default ReportShow
