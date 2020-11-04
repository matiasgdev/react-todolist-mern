import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'

const TaskItem = ({
  title,
  description,
  user,
  _id
}) => {

  return (
    <div class="task__item">
      <h3>{title}</h3>
      <p className="task__desc">{description}</p>
      <span className="task__author">Autor: {user}</span>
      <Link className="task__item-detail" to={`/tarea/${_id}`} >
        Detalle
      </Link>
      
    </div>
  )
}
export default TaskItem
