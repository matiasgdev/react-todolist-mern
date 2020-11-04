import React, { useState } from 'react'
import { MdRadioButtonUnchecked, MdRadioButtonChecked} from 'react-icons/md'
import useUpdateTask from '../../hooks/useUpdateTask'

import './index.css'

const UserTaskItem = ({
  title,
  completed,
  _id,
}) => {

  const { toggleStatusTask } = useUpdateTask()
  const [ status, setStatus ] = useState(completed)

  let CheckButton = status
    ? MdRadioButtonChecked 
    : MdRadioButtonUnchecked

  const updateStatusTask = () => {
    toggleStatusTask({id: _id, status: !status})
    setStatus(!status)
  }

  return (
    <div className="taskUser">
      <div className="taskUser__icon">
        <CheckButton 
          onClick={updateStatusTask}
        />
      </div>
      <div className={`
        taskUser__title
        ${status ? 'dashed' : ''}
      `}>
        {title}
      </div>
    </div>
  )
}

export default UserTaskItem
