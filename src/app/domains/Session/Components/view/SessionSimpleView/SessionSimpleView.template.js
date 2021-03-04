import PropTypes from 'prop-types'
import { Button, Input, Typography } from 'antd'

const SessionSimpleView = (props) => {
  const { login } = props
  return (
    <>
      <Typography>Sign in</Typography>
      <Typography>Use your email to log in.</Typography>
      <Input></Input>
      <Button type="primary">Log in with email</Button>
    </>
  )
}

SessionSimpleView.propTypes = {
  login: PropTypes.func
}

export default SessionSimpleView
