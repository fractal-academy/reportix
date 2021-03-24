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
import { TASK_STATUS } from 'app/constants'
import { Row, Col } from '@qonsoll/react-design'

const originData = []
console.log(TASK_STATUS)
const taskOptions = [{ value: 'Done' }, { value: 'In progress' }]

for (let i = 0; i < 15; i++) {
  originData.push({
    key: i.toString(),
    today: `Task ${i}`,
    status: 'In progress'
  })
}

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
      <Select defaultValue="In progress" options={taskOptions} />
    ) : (
      <Input />
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

const ReportSimpleForm = () => {
  const [form] = Form.useForm()
  const [data, setData] = useState(originData)
  const [editingKey, setEditingKey] = useState('')

  const addRow = () => {
    const newRowData = {
      key: data.length,
      today: '',
      status: 'In progress'
    }
    setData([...data, newRowData])
    console.log(data)
  }

  const isEditing = (record) => record.key === editingKey

  const edit = (record) => {
    form.setFieldsValue({
      today: '',
      status: '',
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
      const newData = [...data]
      const index = newData.findIndex((item) => key === item.key)

      if (index > -1) {
        const item = newData[index]
        newData.splice(index, 1, { ...item, ...row })
        setData(newData)
        setEditingKey('')
      } else {
        newData.push(row)
        setData(newData)
        setEditingKey('')
      }
    } catch (errInfo) {
      console.log('Validate Failed:', errInfo)
    }
  }

  const columns = [
    {
      title: 'Today',
      dataIndex: 'today',
      width: '70%',
      editable: true
    },
    {
      title: 'Status',
      dataIndex: 'status',
      width: '15%',
      editable: true
    },
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
        formNodeType: col.dataIndex === 'status' ? 'select' : 'text',
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record)
      })
    }
  })

  return (
    <>
      <Row>
        <Col>
          <Button
            type="primary"
            style={{ marginBottom: '0.5rem' }}
            onClick={addRow}>
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
              scroll={{ y: 265 }}
            />
          </Form>
        </Col>
      </Row>
    </>
  )
}

export default ReportSimpleForm
