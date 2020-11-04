import { useState } from 'react'
import axios from 'axios'
const API_URL = 'http://localhost:4000/api/task'

export default function useCreateTask() {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)
  const [newTask, setNewTask] = useState(undefined)

  const createTask = async ({title, description, dof, user}) => {
    try {
      const taskData = {
        user,
        title,
        description,
        dof
      }
      setIsLoading(true)
      const { data } = await axios.post(API_URL, taskData, {
        headers: {
          "Content-Type": "application/json"
        }
      })
      setIsLoading(false)
      setNewTask(data.task)

    }catch (err) {
      setIsLoading(false)
      setError(() => {
        if (err.message && err.response.data.message) {
          return err.response.data.message
        } else {
          return err.response.data.errors
        }
      })
    }
  }


  return { isLoading, createTask, error, newTask }
}