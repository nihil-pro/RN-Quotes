import { useState, useEffect, useCallback } from 'react'
import axios from 'axios'
import { QUOTES_FETCH_ERROR } from '../../constants'

export const useFetch = url => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)

  const updateData = useCallback(async () => {

    try {
      const response = await axios.get(url)
      const { data } = response

      if (typeof data === 'object') {
        setData(data)
      } else {
        setError(QUOTES_FETCH_ERROR)
        const error = `useFetch invalid result type. Expected object but received ${data}`
        console.log(error)
      }
    } catch (error) {
      setError(QUOTES_FETCH_ERROR)
      console.log(`useFetch error: `, error)
    }
  }, [])

  useEffect(() => {
    updateData()
  }, [])

  return { data, updateData, error }
}