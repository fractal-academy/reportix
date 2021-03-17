import { Divider } from 'antd'
import { Box, Col, Row } from '@qonsoll/react-design'
import Title from 'antd/lib/typography/Title'
import { UserList } from 'domains/User/components/list'

const CompanyAdvancedView = (props) => {
  const { company, project, employers } = props

  return (
    <>
      <Box mt={2} pt={2} border={'1px solid lightgrey'} borderRadius="8px">
        <Row v="center">
          <Col cw="auto">
            <img
              src="/senseteq.png"
              alt="no data"
              style={{ width: '40px', height: '40px' }}
            />
          </Col>
          <Col v="center">
            <Box>
              <Title style={{ display: 'inline' }}>{company}</Title>
            </Box>
          </Col>
        </Row>
        <Row>
          <Col>
            <Row noGutters my={2}>
              <Col>
                {project.length}
                {project.length > 1 ? ` projects` : ` project`} in work
              </Col>
            </Row>
            <Row noGutters>
              <Col cw={'auto'}>
                {employers.length}
                {employers.length > 1 ? ` employers` : ` employer`}
              </Col>
            </Row>
          </Col>
        </Row>
        <Divider />
      </Box>
    </>
  )
}

CompanyAdvancedView.defaultProps = {
  company: 'Senseteq',
  project: ['Expences-tracking-app', 'Expences-tracking-app'],
  employers: ['Dima', 'Maksim']
}

export default CompanyAdvancedView
