import React, { useContext } from 'react'
import { UserContext } from '../../context/UserContext'
import useGetTasks from '../../hooks/useGetTasks'


import CreateTask from '../../components/CreateTask'
import TaskItem from '../../components/TaskItem'

const Home = () => {
  const { tasks, error, isLoading } = useGetTasks()
  const { user } = useContext(UserContext)

  if (error) return <span>{error}</span>
  return (
    <div className="tasks">
      {user && 
        <CreateTask />
      }
      <h2 className="home-title title">
        Tareas de la comunidad
      </h2>
      {isLoading ? (
        <div className="message">Cargando tareas...</div>
      ) :  (
        tasks.length >= 0 && tasks.map(task => {
          return (
            <TaskItem key={task._id} {...task} />
          )
        })
      )}
    </div>
  )
}

export default Home
