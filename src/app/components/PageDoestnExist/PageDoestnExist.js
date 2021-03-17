import { Result, Button } from 'antd'
import { useHistory } from 'react-router-dom'
import { Dashboard } from 'components'
import { ROUTES_PATHS } from '../../constants'

const PageExistError = () => {
  const history = useHistory()

  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Button
          type="primary"
          onClick={() => history.push(ROUTES_PATHS.DASHBOARD)}>
          Back Home
        </Button>
      }
    />
  )
}
export default PageExistError
