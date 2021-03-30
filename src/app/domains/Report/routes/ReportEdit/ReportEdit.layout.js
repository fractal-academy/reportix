import { Box, Col, Container, Row } from '@qonsoll/react-design'
import { style } from 'app/style'
import { ReportSimpleForm } from 'domains/Report/components/form'

const ReportEdit = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Box style={style.bottomFixed}>
            <ReportSimpleForm />
          </Box>
        </Col>
      </Row>
    </Container>
  )
}

export default ReportEdit
