import { useState } from 'react'
import axios from 'axios'

const API_URL = 'http://localhost:4000/api/task/'

export default function useUpdateTask() {
  const [updatedTask, setUpdatedTask] = useState({})
  const [errorUpdateTask, setErrorUpdateTask] = useState(null)

  const toggleStatusTask = async ({id, status}) => {
    try {
      const { data } = await axios.put(
        `${API_URL}/${id}`, {
        completed: status
      }, {
       headers: {
         "Content-Type": "application/json"
       }
      })
      setUpdatedTask(data.task)

    } catch(err) {
      setErrorUpdateTask(() => {
        if (err.message && err.response.data.message) {
          return err.response.data.message
        } else {
          return err.message
        }
      })
    }
  }

  return { toggleStatusTask, updatedTask, errorUpdateTask}

}

