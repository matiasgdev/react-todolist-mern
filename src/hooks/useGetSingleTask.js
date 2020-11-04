import { useEffect, useState, useCallback } from 'react'

const API_URL = 'http://localhost:4000/api/task'

export default function useGetSingleTask({id}) {
  const [singleTask, setSingleTask] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')

  const getSingleTask = useCallback(() => {
    window.fetch(`${API_URL}/${id}`)
      .then(res => {
        if (!res.ok) {
          setError(res.statusText)
        }
        return res.json()
      })
      .then(task => {
        setIsLoading(false)
        setSingleTask(task)
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
  }, [id])

  useEffect(() => {
    setTimeout(getSingleTask, 500)
  }, [getSingleTask]) 

  return { error, isLoading, singleTask }
  
}