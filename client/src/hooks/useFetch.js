import { useEffect, useState } from 'react'
import { makeRequest } from '../makeRequest'

export function useFetch (url) {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    async function fetchData () {
      try {
        setLoading(true)
        const res = await makeRequest.get(url)
        setData(res.data.data)
      } catch (error) {
        setError(true)
      }
      setLoading(false)
    }

    fetchData()

    return () => {
    }
  }, [url])

  return { data, loading, error }
}
