import { useState } from 'react'
import {
  Table,
  Input,
  Popconfirm,
  Form,
  Typography,
  Button,
  Select
} from 'antd'
import { style } from 'app/style'
import TASK_STATUS from 'app/constants/taskStatus'
import { Row, Col } from '@qonsoll/react-design'
import { UserSelect } from 'domains/User/components/select'

const originData = []
const COLUMS_WITH_SELECT = ['status', 'blockers']

const taskOptions = [
  { value: TASK_STATUS.DONE },
  { value: TASK_STATUS.IN_PROGRESS }
]

const ReportTable = (props) => {
  // [INTERFACES]
  const { tableCols } = props

  // [STATE]
  const [data, setData] = useState(originData)
  const [editingKey, setEditingKey] = useState('')

  // [ADDITIONAL_HOOKS]
  const [form] = Form.useForm()

  // [HELPER_FUNCTIONS]
  const onSelectChange = (selected) => {}

  const isEditing = (record) => record.key === editingKey

  const addRow = () => {
    const newRowData = {
      key: data.length,
      firstCol: '',
      secondCol: TASK_STATUS.IN_PROGRESS
    }
    setData([...data, newRowData])
  }

  const edit = (record) => {
    form.setFieldsValue({
      firstCol: '',
      secondCol: '',
      ...record
    })
    setEditingKey(record.key)
  }

  const cancel = () => {
    setEditingKey('')
  }

  const save = async (key) => {
    try {
      const row = await form.validateFields()
      if (row.blockers) row.blockers = row.blockers.join(', ')
      const newData = [...data]
      const index = newData.findIndex((item) => key === item.key)

      if (index > -1) {
        const item = newData[index]
        newData.splice(index, 1, { ...item, ...row })
        setData(newData)
        form.resetFields()
        setEditingKey('')
      } else {
        newData.push(row)
        setData(newData)
        form.resetFields()
        setEditingKey('')
      }
    } catch (errInfo) {
      console.log('Validate Failed:', errInfo)
    }
  }
  // [TEMPLATE_PARTS]
  const EditableCell = ({
    editing,
    dataIndex,
    title,
    formNodeType,
    record,
    index,
    children,
    ...restProps
  }) => {
    const formNode =
      formNodeType === 'select' ? (
        dataIndex === 'blockers' ? (
          <UserSelect onChange={onSelectChange} placeholder="Select users" />
        ) : (
          <Select options={taskOptions} placeholder="Select status" showArrow />
        )
      ) : (
        <Input placeholder="Enter task name" />
      )
    return (
      <td {...restProps}>
        {editing ? (
          <Form.Item
            name={dataIndex}
            style={{
              margin: 0
            }}
            rules={[
              {
                required: true,
                message: `Please Input ${title}!`
              }
            ]}>
            {formNode}
          </Form.Item>
        ) : (
          children
        )}
      </td>
    )
  }

  const columns = [
    ...tableCols,
    {
      title: 'operation',
      dataIndex: 'operation',
      render: (_, record) => {
        const editable = isEditing(record)
        return editable ? (
          <>
            <Button
              type="link"
              onClick={() => save(record.key)}
              style={style.resetPadding}>
              Save
            </Button>
            <Popconfirm
              title="Sure to cancel?"
              onConfirm={cancel}
              placement="topRight">
              <Button type="link">Cancel</Button>
            </Popconfirm>
          </>
        ) : (
          <Typography.Link
            disabled={editingKey !== ''}
            onClick={() => edit(record)}>
            Edit
          </Typography.Link>
        )
      }
    }
  ]

  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col
    }

    return {
      ...col,
      onCell: (record) => ({
        record,
        formNodeType: COLUMS_WITH_SELECT.includes(col.dataIndex)
          ? 'select'
          : 'text',
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record)
      })
    }
  })
  // [TEMPLATE]
  return (
    <>
      <Row mb={2}>
        <Col>
          <Button type="primary" onClick={addRow}>
            Add row
          </Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form form={form} component={false}>
            <Table
              components={{
                body: {
                  cell: EditableCell
                }
              }}
              dataSource={data}
              columns={mergedColumns}
              size="small"
              pagination={{ position: [], pageSize: 0 }}
              scroll={{ y: 150 }}
            />
          </Form>
        </Col>
      </Row>
    </>
  )
}

export default ReportTable
