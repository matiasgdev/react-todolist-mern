import React from 'react'
import useGetSingleTask from '../../hooks/useGetSingleTask'

import TaskDetailItem from '../../components/TaskDetailItem'

import './index.css'

const TaskDetailPage = ({match}) => {
  let id = match.params.id

  const { error, isLoading, singleTask } = useGetSingleTask({id})

  return (
    <div className="taskDetail">
      {isLoading ? (
        <div className="message">
          Cargando Tarea...
        </div>
      ) : !error && singleTask ? (
        <TaskDetailItem {...singleTask}/>
      ) : (
        error
      )
    }
    </div>
  )
}

export default TaskDetailPage
