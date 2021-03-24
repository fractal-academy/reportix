import { ReportSimpleView } from 'domains/Report/components/views'
import { Select, DatePicker, Button } from 'antd'
import { Spinner } from 'components/Spinner'
import { Row, Col } from '@qonsoll/react-design'
import { useState } from 'react'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { getCollectionRef } from 'app/services/Firestore'
import { COLLECTIONS } from 'app/constants'
import { style } from 'app/style'
import { ReportSimpleForm } from 'domains/Report/components/form'

const reportMockData = [
  {
    today: [
      { taskName: 'add something', status: 'Done' },
      { taskName: 'remove something', status: 'In progress' },
      { taskName: 'edit something', status: 'Done' },
      { taskName: 'replace something', status: 'Done' }
    ],
    tomorrow: [
      { taskName: 'Планування', blocker: 'Я' },
      { taskName: 'редагування деяких компонент', blocker: 'Женя' },
      { taskName: 'Фікс конфліктів', blocker: 'Слава' },
      { taskName: 'Замінити таблиці на лісти', blocker: 'Максім' }
    ]
  },
  {
    today: [
      { taskName: 'add something', status: 'Done' },
      { taskName: 'remove something', status: 'In progress' },
      { taskName: 'edit something', status: 'Done' },
      { taskName: 'replace something', status: 'Done' }
    ],
    tomorrow: [
      { taskName: 'Планування', blocker: 'Я' },
      { taskName: 'редагування деяких компонент', blocker: 'Женя' },
      { taskName: 'Фікс конфліктів', blocker: 'Слава' },
      { taskName: 'Замінити таблиці на лісти', blocker: 'Максім' }
    ]
  }
]
// const ReportsAll = () => {
//   const [selectedItems, setSelectedItems] = useState([])
//   const [users, loading] = useCollectionData(
//     getCollectionRef(COLLECTIONS.USERS),
//     { idField: 'id' }
//   )
//   const dataForSelect =
//     users &&
//     users.map((user) => {
//       if (user.firstName && user.surname)
//         return `${user.firstName} ${user.surname}`
//       return user.email
//     })
//   const onSelectChange = (selected) => {
//     setSelectedItems(selected)
//   }
//   const onDateChange = (date) => {
//     /* Filter reports with date*/
//     //console.log(date)
//   }

//   const onClickAll = () => {
//     console.log(dataForSelect)
//     //!!selectedItems ? setSelectedItems() : users && setSelectedItems(users)
//   }

//   if (!users || loading) {
//     return <Spinner />
//   }

//   return (
//     <>
//       <Row noGutters py={3} pr={2}>
//         <Col cw="auto">
//           <Button type="primary" onClick={onClickAll}>
//             All
//           </Button>
//         </Col>
//         <Col ml={2}>
//           <Select
//             placeholder="Enter user"
//             mode="tags"
//             value={selectedItems}
//             onChange={onSelectChange}
//             style={style.fullWidth}>
//             {dataForSelect.map((item) => (
//               <Select.Option key={item.id} value={item}>
//                 {item}
//               </Select.Option>
//             ))}
//           </Select>
//         </Col>
//         <Col cw="auto">
//           <DatePicker onChange={onDateChange} />
//         </Col>
//       </Row>
//       {reportMockData.map((report, index) => (
//         <Row key={index} noGutters mb={3} pr={2}>
//           <Col
//             py={3}
//             noGutters
//             border="1px solid lightgray"
//             borderRadius="1rem">
//             <ReportSimpleView data={report} />
//           </Col>
//         </Row>
//       ))}
//     </>
//   )
// }
const ReportsAll = () => {
  return <ReportSimpleForm />
}

export default ReportsAll
