import { AccountSimpleView } from 'domains/Account/components/views'
import { Box, Row, Col } from '@qonsoll/react-design'

const mockData = [
  { type: 'GitHub', nickname: 'sashka2131' },
  { type: 'BitBacket' }
]

const AccountsAll = () => {
  return (
    <Row>
      <Col cw="auto">
        <Box my={3} p={3} border="1px solid lightgray" borderRadius="1rem">
          {mockData.map((account, index) => (
            <AccountSimpleView
              key={index}
              type={account.type}
              nickname={account.nickname}
            />
          ))}
        </Box>
      </Col>
    </Row>
  )
}

export default AccountsAll
