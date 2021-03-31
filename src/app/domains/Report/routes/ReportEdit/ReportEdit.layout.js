import { Box, Col, Container, Row } from '@qonsoll/react-design'
import { ReportSimpleForm } from 'domains/Report/components/form'
import { ArrowLeftOutlined } from '@ant-design/icons'
import { useHistory } from 'react-router'
import { Button, Typography } from 'antd'

const { Title } = Typography

const ReportEdit = () => {
  //[ADITIONAL_HOOKS]
  const history = useHistory()

  //[TEMPLATE]
  return (
    <Container>
      <Row>
        <Col>
          <Box mt={4} mx={4} display="flex" alignItems="center">
            <Box mr={2}>
              <Button
                size="large"
                type="text"
                icon={<ArrowLeftOutlined />}
                onClick={() => history.goBack()}
              />
            </Box>
            <Title style={{ marginBottom: 0 }} level={3}>
              Edit Report
            </Title>
          </Box>
          <ReportSimpleForm />
        </Col>
      </Row>
    </Container>
  )
}

export default ReportEdit
