import { LEAVE_DAY_VALUE } from 'app/constants/leaveDay'
import { Select } from 'antd'
import Tag from 'components/Tags/Tags'

const LeaveDaySingleSelect = () => {
  const { Option } = Select

  return (
    <>
      <Select placeholder="Choose option" style={{ width: 160 }}>
        {LEAVE_DAY_VALUE.map((item, index) => (
          <Option key={index} value={item}>
            <Tag status={item} key={index} />
          </Option>
        ))}
      </Select>
    </>
  )
}

export default LeaveDaySingleSelect
