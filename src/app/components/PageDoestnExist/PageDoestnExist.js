import { Result, Button } from 'antd'
import { useHistory } from 'react-router-dom'
import { ROUTES_PATHS } from 'app/constants'
import { useSession } from 'app/context/SesionContext/useSession'

const PageExistError = () => {
  const history = useHistory()
  const currentUser = useSession()

  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Button
          type="primary"
          onClick={() =>
            history.push(
              currentUser ? ROUTES_PATHS.USER_SHOW : ROUTES_PATHS.LOGIN
            )
          }>
          Back Home
        </Button>
      }
    />
  )
}
export default PageExistError
