import { AccountSimpleView } from 'domains/Account/components/views'
import { Box, Row, Col } from '@qonsoll/react-design'
import { firebase } from 'app/services/Firebase'
import { auth } from 'app/services/Firebase/firebase'

const mockData = [
  { type: 'GitHub' },
  { type: 'BitBacket', nickname: 'sashka2131' }
]

const AccountsAll = () => {
  const addAccount = async () => {
    const GitHubProvider = new firebase.auth.GithubAuthProvider()
    await auth.signInWithPopup(GitHubProvider).then((result) => {
      const user = result.additionalUserInfo
      /*ADD FIREBASE FUNCTIONS LOGIC TO ADD THIS INFO INTO DATABASE*/
    })
  }
  return (
    <Row>
      <Col cw="auto">
        <Box my={3} p={3} border="1px solid lightgray" borderRadius="1rem">
          {mockData.map((account, index) => (
            <AccountSimpleView
              key={index}
              type={account.type}
              nickname={account.nickname}
              addAccount={addAccount}
            />
          ))}
        </Box>
      </Col>
    </Row>
  )
}

export default AccountsAll
