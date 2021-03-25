import { RequestAdvancedView } from 'domains/Request/components/views/RequestAdvancedView'
import { Col, Row } from '@qonsoll/react-design'
import {
  useCollectionData,
  useDocumentData
} from 'react-firebase-hooks/firestore'
import { getCollectionRef } from 'services/Firestore'
import COLLECTIONS from 'constants/collection'
import { useSession } from 'context/SesionContext'

const RequestList = (props) => {
  const { ownRequests } = props
  const currentUser = useSession()

  const mockRequest = [
    {
      type: 'Vacation',
      userName: 'Name',
      fromDate: '2021/04/03',
      toDate: '2021/18/03',
      description: 'Trip to Antarctica',
      firstStatus: 'Approved',
      secondStatus: 'Approved'
    },
    {
      type: 'Swap day',
      userName: 'Name',
      fromDate: '2021/04/03',
      toDate: '2021/13/03',
      description: 'Hangover',
      firstStatus: 'Approved',
      secondStatus: 'Rejected'
    }
  ]
  const [requests, isLoading] = useCollectionData(
    getCollectionRef(COLLECTIONS.LEAVE_DAYS),
    { idField: 'id' }
  )
  const filteredRequests =
    !isLoading && requests.filter((item) => item.userId === currentUser.uid)
  // !isLoading && console.log(requests)
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
