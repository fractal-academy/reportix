import { Checkbox } from 'antd'
import { useState } from 'react'
import { LEAVE_DAY, LEAVE_DAY_VALUE } from 'app/constants/leaveDay'
import { Box } from '@qonsoll/react-design'

const CheckboxGroup = Checkbox.Group

const leaveDayArr = LEAVE_DAY_VALUE
const defaultCheckedList = [
  LEAVE_DAY.VACATION,
  LEAVE_DAY.SICK_DAY,
  LEAVE_DAY.SWAP_DAY
]

const LeaveDayFilter = () => {
  const [state, setState] = useState({
    checkedList: defaultCheckedList,
    indeterminate: true,
    checkAll: true
  })

  const onChange = (checkedList) => {
    setState({
      checkedList,
      indeterminate:
        !!checkedList.length && checkedList.length < leaveDayArr.length,
      checkAll: checkedList.length === leaveDayArr.length
    })
  }

  const onCheckAllChange = (e) => {
    setState({
      checkedList: e.target.checked ? leaveDayArr : [],
      indeterminate: false,
      checkAll: e.target.checked
    })
  }

  return (
    <Box mt={2} mb={2}>
      <Box>
        <Checkbox
          indeterminate={state.indeterminate}
          onChange={onCheckAllChange}
          checked={state.checkAll}>
          All
        </Checkbox>
      </Box>
      <CheckboxGroup
        options={leaveDayArr}
        value={state.checkedList}
        onChange={onChange}
      />
    </Box>
  )
}
export default LeaveDayFilter
