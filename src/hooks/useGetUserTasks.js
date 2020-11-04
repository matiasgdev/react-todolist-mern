import { useEffect, useState, useContext, useCallback } from 'react'
import { UserContext } from '../context/UserContext'

const API_URL = 'http://localhost:4000/api/task'

export default function useGetUserTasks() {

  const {user} = useContext(UserContext)
  const [userTasks, setUserTasks] = useState([])
  const [errorUserTasks, setErrorUserTasks] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  const getUserTasks = useCallback(async () => {
    try {
      const response = await window.fetch(`${API_URL}/user/${user}`)
      const tasks = await response.json()
      setIsLoading(false)
      setUserTasks(tasks)

    }catch(err) {
      setErrorUserTasks(() => {
        if (err.message && err.response.data.message) {
          return err.response.data.message
        } else {
          return err.message
        }
      })
    }

  }, [user])


  useEffect(() => {
    setTimeout(getUserTasks, 500)
  }, [getUserTasks])


  return { isLoading, userTasks, errorUserTasks }

}