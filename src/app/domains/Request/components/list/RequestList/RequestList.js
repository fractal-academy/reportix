import { RequestAdvancedView } from 'domains/Request/components/views/RequestAdvancedView'
import { Col, Row } from '@qonsoll/react-design'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { getCollectionRef } from 'services/Firestore'
import COLLECTIONS from 'constants/collection'
import { Empty } from 'antd'
import { useSession } from 'context/SesionContext'

const RequestList = (props) => {
  const currentUser = useSession()
  const [requests, isLoading] = useCollectionData(
    getCollectionRef(COLLECTIONS.LEAVE_DAYS),
    { idField: 'id' }
  )
  const [admins, loading] = useCollectionData(
    getCollectionRef(COLLECTIONS.USERS).where('isAdmin', '==', true),
    { idField: 'id' }
  )
  const filteredRequests =
    !isLoading && requests.filter((item) => item.userId === currentUser?.uid)
  const switchRequests = currentUser?.isAdmin ? requests : filteredRequests
  return (
    <>
      {requests?.length !== 0 ? (
        <Row noGutters>
          <Col>
            {!isLoading &&
              switchRequests.map((item, index) => (
                <Row my={3} noGutters key={index}>
                  <Col>
                    <RequestAdvancedView data={item} admin={admins?.[0]} />
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
