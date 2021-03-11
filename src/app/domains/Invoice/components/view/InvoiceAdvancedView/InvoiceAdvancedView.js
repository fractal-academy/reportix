import { Box, Col, Row } from '@qonsoll/react-design'
import Text from 'antd/lib/typography/Text'
import { Collapse } from 'antd'
import {
  CheckCircleOutlined,
  CloseCircleOutlined,
  SyncOutlined
} from '@ant-design/icons'
import Tag from 'components/Tags'

const { Panel } = Collapse

const InvoiceAdvancedView = (props) => {
  const {
    companyName,
    userName,
    project,
    invoiceDate,
    value,
    status,
    iban,
    tasksCounter,
    taskItem
  } = props
  return (
    <Box border={'1px solid lightgrey'} mb={2} borderRadius={'8px'} p={3}>
      <Row noGutters>
        <Col>
          <Row h="between" noGutters>
            <Col>
              <Text type="secondary">From: </Text>
              <Text>{userName}</Text>
            </Col>
            <Col cw={'auto'}>
              <Tag status={status} />
            </Col>
          </Row>
          <Row noGutters>
            <Col>
              <Text type="secondary">To:</Text> <Text>{companyName}</Text>
            </Col>
          </Row>
          <Row noGutters>
            <Col>
              <Text type="secondary">Project:</Text> <Text>{project}</Text>
            </Col>
          </Row>
          <Row noGutters>
            <Col>
              <Text type="secondary">IBAN:</Text> <Text>{iban}</Text>
            </Col>
          </Row>
          <Row noGutters>
            <Col>
              <Text type="secondary">Value:</Text> <Text>{value}</Text>
            </Col>
          </Row>
          <Row noGutters>
            <Col>
              <Text type="secondary">Date:</Text> <Text>{invoiceDate}</Text>
            </Col>
          </Row>
          <Collapse>
            <Panel header={`Tasks: (${tasksCounter})`}>
              {taskItem.map((item, index) => (
                <Row mb={1}>
                  <Text key={index}>
                    {index + 1}. {item}
                  </Text>
                </Row>
              ))}
            </Panel>
          </Collapse>
        </Col>
      </Row>
    </Box>
  )
}
InvoiceAdvancedView.defaultProps = {
  userName: 'Aleksandr Golyk',
  companyName: 'Senseteq',
  project: 'Expences-tracking-app',
  iban: '5532452334324234324234234',
  invoiceDate: '01-04-2021',
  value: '200$',
  tasksCounter: '2',
  taskItem: [
    'Task #1: Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original.',
    'Task #2: Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original.'
  ]
}

export default InvoiceAdvancedView
