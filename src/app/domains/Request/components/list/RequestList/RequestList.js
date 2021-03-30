import { RequestAdvancedView } from 'domains/Request/components/views/RequestAdvancedView'
import { Col, Row } from '@qonsoll/react-design'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { getCollectionRef } from 'services/Firestore'
import COLLECTIONS from 'constants/collection'
import { useParams } from 'react-router-dom'
import { Empty } from 'antd'

const RequestList = (props) => {
  const { ownRequests, withButtonAccept } = props
  const { id } = useParams()

  const [requests, isLoading] = useCollectionData(
    getCollectionRef(COLLECTIONS.LEAVE_DAYS),
    { idField: 'id' }
  )
  const filteredRequests =
    !isLoading && requests.filter((item) => item.userId === id)
  const switchRequests = ownRequests ? filteredRequests : requests
  return (
    <>
      {requests?.length !== 0 ? (
        <Row>
          <Col>
            {!isLoading &&
              switchRequests.map((item, index) => (
                <Row my={2} borderRadius={'8px'} py={3} noGutters key={index}>
                  <Col>
                    <RequestAdvancedView
                      data={item}
                      withButtonAccept={withButtonAccept}
                    />
                  </Col>
                </Row>
              ))}
          </Col>
        </Row>
      ) : (
        <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
      )}
    </>
  )
}

export default RequestList
