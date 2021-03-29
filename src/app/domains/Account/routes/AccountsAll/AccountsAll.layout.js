import { AccountSimpleView } from 'domains/Account/components/views'
import { firebase } from 'app/services/Firebase'
import { auth } from 'app/services/Firebase/firebase'
import { setData } from 'services/Firestore'
import COLLECTIONS from 'constants/collection'
import { message } from 'antd'
import { useParams } from 'react-router-dom'

const AccountsAll = (props) => {
  const { id } = useParams()
  const { GitHubName } = props
  const addAccount = async () => {
    const GitHubProvider = new firebase.auth.GithubAuthProvider()
    try {
      const result = await auth.currentUser.linkWithPopup(GitHubProvider)
      const userNameGitHub = result.additionalUserInfo.username
      await setData(COLLECTIONS.USERS, id, {
        GitHubName: userNameGitHub
      })
    } catch (e) {
      message.error("Can't connect to GitHub")
    }
  }

  return <AccountSimpleView addAccount={addAccount} GitHubName={GitHubName} />
}

export default AccountsAll
