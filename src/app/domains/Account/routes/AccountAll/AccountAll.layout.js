import { AccountSimpleView } from 'domains/Account/components/Views/AccountSimpleView'
import { Box, Row, Col } from '@qonsoll/react-design'

const mockData = [
  { type: 'GitHub', userName: 'sashka2131' },
  { type: 'BitBacket' }
]

const AccountAll = () => {
  return (
    <Row>
      <Col cw="auto">
        <Box my={3} p={3} border="1px solid lightgray" borderRadius="1rem">
          {mockData.map((account, index) => (
            <AccountSimpleView
              key={index}
              type={account.type}
              userName={account.userName}
            />
          ))}
        </Box>
      </Col>
    </Row>
  )
}

export default AccountAll
