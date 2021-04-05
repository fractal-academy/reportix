import { Select } from 'antd'
import { style } from '../../../../../style'
import { useState } from 'react'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { getCollectionRef } from 'services/Firestore'
import COLLECTIONS from 'constants/collection'

const ProjectSingleSelect = (props) => {
  // [INTERFACES]
  const { onChange } = props

  //[ADDITIONAL_HOOKS]
  const [projects, loading] = useCollectionData(
    getCollectionRef(COLLECTIONS.PROJECTS),
    { idField: 'id' }
  )
  const [selected, setSelected] = useState(props?.projects || [])

  //[COMPUTED_PROPERTIES]
  const dataForSelect =
    projects &&
    projects.map((project) => {
      const projectName = project.projectName
      return {
        label: projectName,
        value: project.id
      }
    })

  const onSelect = (value) => {
    setSelected(value)
    onChange && onChange(value)
  }

  return (
    <Select
      value={selected}
      placeholder="Select project"
      // mode="tags"
      onChange={onSelect}
      style={style.fullWidth}
      options={dataForSelect}
      showArrow
    />
  )
}

export default ProjectSingleSelect
