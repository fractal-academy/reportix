import { RequestAdvancedView } from 'domains/Request/components/views/RequestAdvancedView'
import { Col, Row } from '@qonsoll/react-design'

const RequestList = (props) => {
  const mockRequest = [
    {
      type: 'Vacation',
      fromDate: '2021/04/03',
      toDate: '2021/18/03',
      description: 'Trip to Antarctica',
      firstStatus: 'Approved',
      secondStatus: 'Approved'
    },
    {
      type: 'Swap day',
      fromDate: '2021/04/03',
      toDate: '2021/13/03',
      description: 'Hangover',
      firstStatus: 'Approved',
      secondStatus: 'Rejected'
    }
  ]

  return (
    <>
      <Row>
        <Col>
          {mockRequest.map((item, index) => (
            <Row my={2} borderRadius={'8px'} py={3} noGutters>
              <Col>
                <RequestAdvancedView
                  key={index}
                  type={item.type}
                  fromDate={item.fromDate}
                  toDate={item.toDate}
                  description={item.description}
                  firstStatus={item.firstStatus}
                  secondStatus={item.secondStatus}
                />
              </Col>
            </Row>
          ))}
        </Col>
      </Row>
    </>
  )
}

export default RequestList
