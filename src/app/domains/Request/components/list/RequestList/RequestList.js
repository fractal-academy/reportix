import { RequestAdvancedView } from 'domains/Request/components/views/RequestAdvancedView'
import { Col, Row } from '@qonsoll/react-design'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { getCollectionRef } from 'services/Firestore'
import COLLECTIONS from 'constants/collection'
import { useSession } from 'context/SesionContext'

const RequestList = (props) => {
  const { ownRequests } = props
  const currentUser = useSession()

  const [requests, isLoading] = useCollectionData(
    getCollectionRef(COLLECTIONS.LEAVE_DAYS),
    { idField: 'id' }
  )
  const filteredRequests =
    !isLoading && requests.filter((item) => item.userId === currentUser.uid)
  const switchRequests = ownRequests ? filteredRequests : requests
  return (
    <>
      <Row>
        <Col>
          {!isLoading &&
            switchRequests.map((item, index) => (
              <Row my={2} borderRadius={'8px'} py={3} noGutters key={index}>
                <Col>
                  <RequestAdvancedView data={item} />
                </Col>
              </Row>
            ))}
        </Col>
      </Row>
    </>
  )
}

export default RequestList
