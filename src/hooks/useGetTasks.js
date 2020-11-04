import { useEffect, useState } from 'react'

const API_URL = 'http://localhost:4000/api/task'

export default function useGetTasks() {

  const [tasks, setTasks] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')

  const getTasks = () => {
    window.fetch(API_URL)
      .then(res => {
        if (!res.ok) {
          setError(res.statusText)
        }
        return res.json()
      })
      .then(tasks => {
        setIsLoading(false)
        setTasks(tasks)
      })
      .catch(e => {
        setError(() => {
          if (e.response && e.response.data.message) {
            return e.response.data.message
          } else {
            return e.message
          }
        })
      }) 
  }

  useEffect(() => {
    setTimeout(getTasks, 500)
  }, [])

  return { error, isLoading, tasks }
  
}