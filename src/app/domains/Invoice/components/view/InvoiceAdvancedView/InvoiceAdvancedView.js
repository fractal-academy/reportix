import { Box, Col, Row } from '@qonsoll/react-design'
import Text from 'antd/lib/typography/Text'
import { Collapse, Tag } from 'antd'
import {
  CheckCircleOutlined,
  CloseCircleOutlined,
  SyncOutlined
} from '@ant-design/icons'

const { Panel } = Collapse
const statusMap = [
  {
    type: 'Reject',
    icon: <CloseCircleOutlined />,
    color: 'error'
  },
  {
    type: 'Pending',
    icon: <SyncOutlined />,
    color: 'warning'
  },
  {
    type: 'Accept',
    icon: <CheckCircleOutlined />,
    color: 'success'
  }
]

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
              <Text>From: {userName}</Text>
            </Col>
            <Col cw={'auto'}>
              {statusMap.map((item, index) => {
                if (item.type === status)
                  return (
                    <Row key={index}>
                      <Tag icon={item.icon} color={item.color}>
                        {item.type}
                      </Tag>
                    </Row>
                  )
              })}
            </Col>
          </Row>
          <Row>
            <Text>To: {companyName}</Text>
          </Row>
          <Row>
            <Text>Project: {project}</Text>
          </Row>
          <Row>
            <Text>IBAN: {iban}</Text>
          </Row>
          <Row>
            <Text>Value: {value}</Text>
          </Row>
          <Row>
            <Text>Date: {invoiceDate}</Text>
          </Row>
          <Collapse>
            <Panel header={`Tasks: (${tasksCounter})`}>
              {taskItem.map((item, index) => (
                <p key={index}>
                  {index + 1}. {item}
                </p>
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
