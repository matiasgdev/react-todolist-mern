import React from 'react'

const TaskDetailItem = ({
  title,
  description,
  user,
  createdAt,
  updatedAt,
  completed,
  dof
}) => {

  let status = completed ? "completada" : "pendiente"

  return (
    <div className="taskDetail__container">
      <h4>{title}</h4>
      <p
        className="taskDetail__desc"
      >
        {description}
      </p>
      <div 
      className={`taskDetail__state ${completed ? 'c' : 'u'}`}>
        {status}
      </div>
      <div className="taskDetail__date">
        <span>Creado: {formatDate(createdAt)}</span>
        <span>Modificado: {formatDate(updatedAt)}</span>
      </div>
      <div className="taskDetail__dof">
        <span className="bold">
          Finalizar antes de:
        </span>
        <span>
          {formatDate(dof)}
        </span>
      </div>
      <div className="taskDetail__author">
        <div>
          <span>{user}</span>
        </div>
      </div>
    </div>
  )
}

 
const formatDate = (date) => {
  return date && new Date(date).toLocaleString()
}

export default TaskDetailItem
