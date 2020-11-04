import React, { useContext, useEffect } from 'react'
import { UserContext } from '../../context/UserContext'
import useGetUserTasks from '../../hooks/useGetUserTasks'

import UserTaskItem from '../../components/UserTaskItem'

import './index.css'
import CreateTask from '../../components/CreateTask'

const ProfilePage = ({history}) => {
  
  const { user, setUserToContext } = useContext(UserContext) 
  const { isLoading, userTasks } = useGetUserTasks()

  useEffect(() => {
    if (!user) {
      history.push('/identificarse')
    }
  }, [user, history])

  const logout = () => {
    setUserToContext(null)
    window.localStorage.removeItem('user')
  }

  return (
    <div className="profile">
      <div className="profile__header">
        <h3>Hola, {user}</h3>
      </div>
      <CreateTask />
      <div className="profile__tasks">
        <h4 className="profile__tasks--title">
          {!isLoading &&
            `Tus tareas (${userTasks.length})`
          }
        </h4>
        <div className="profile__tasksList">
          {isLoading ? (
            <div className="message">
              Cargando Tareas...
            </div>
          ) : (
            userTasks.length > 0 
            ? (
              userTasks.map(task => {
                return (
                  <UserTaskItem key={task._id} {...task} />
                )
              })
            ) : (
              <div className="message">
                No hay tareas aún
              </div>
            )
          )
          }
        </div>
        
        <div className="profile__logOut">
          <button
            className="profile__logOut--button"
            onClick={logout}
          > 
            Cerrar sesion
          </button>
        </div>
      </div>

    </div>
  )
}

export default ProfilePage
