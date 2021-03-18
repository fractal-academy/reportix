import InvoiceLIst from 'domains/Invoice/components/list/InvoiceList'
import { Col, Row } from '@qonsoll/react-design'

const InvoicesAll = () => {
  return (
    <>
      <Row>
        <Col>
          <InvoiceLIst />
        </Col>
      </Row>
    </>
  )
}

export default InvoicesAll
