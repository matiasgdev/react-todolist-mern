import React, { useState, useContext, useEffect } from 'react'
import { UserContext } from '../../context/UserContext'
import { useHistory } from 'react-router-dom'
import moment from 'moment'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import useInput from '../../hooks/useInput'
import useCreateTask from '../../hooks/useCreateTask'

import './index.css'

const dateFormat = moment().format('YYYY-MM-DD')

const CreateTask = () => {
  const [form, toggleForm] = useState(false)
  const { user } = useContext(UserContext)
  let history = useHistory()

  const [title, ] = useInput('')
  const [description, ] = useInput('')
  const [date, ] = useInput(dateFormat)

  const toggleContent = () => {
    toggleForm(!form)
  }
  
  const { isLoading, error, createTask, newTask } = useCreateTask()

  const handleSubmit = async (e) => {
    e.preventDefault()
    await createTask({
      title: title.value,
      description: description.value,
      dof: date.value,
      user 
    })
  }

  useEffect(() => {
    if (newTask) {
      history.push(`/tarea/${newTask._id}`)
    }
  }, [newTask, history])

  return (
    <div className="createTask">
      <AiOutlinePlusCircle
        onClick={toggleContent}
        className="createTask__button"
      />
      {form && (
        <form
          className="form"
          onSubmit={handleSubmit}
        >
          <>
            {Array.isArray(error) ? (
              error.map(err => {
                return (
                  <div 
                    key={err}
                    className="error"
                  >
                    {err}
                  </div>
                )
              })
            ) : (
              <div className="error">
                {error}
              </div>
            )}
          </>
          <div className="form__control">
            <input
              type="text"
              placeholder="Titulo"
              {...title}
            />
          </div>
          <div className="form__control">
            <textarea
              placeholder="Descripción"
              {...description}
            />
          </div>
          <div className="form__control">
            <label htmlFor="date" >Fecha de finalización:</label>
            <input
              type="date"
              placeholder="Descripción"
              {...date}
              min={dateFormat}
            />
          </div>
          <div className="form__control">
            {isLoading ? (
              'Enviando solicitud...'
            ) : (
              <button
                type="submit"
              >
                Crear
              </button>
            )}
          </div>
        </form>
      )}
    </div>
  )
}




export default CreateTask
