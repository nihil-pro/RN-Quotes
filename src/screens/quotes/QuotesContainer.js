import React, { useState, useCallback } from 'react'
import { useFocusEffect } from '@react-navigation/native'
import { useFetch } from '../../hooks/fetch.hook'
import { useInterval } from '../../hooks/interval.hook'
import { Loader } from '../../components/Loader'
import { Quotes } from './Quotes'
import {
  QUOTES_API_URL,
  QUOTES_UPDATE_INTERVAL
} from '../../../constants'

export const QuotesContainer = () => {
  const { data, updateData, error } = useFetch(QUOTES_API_URL)
  const [ shouldBeUpdated, setShouldBeUpdated ] = useState(false)

  useFocusEffect(
    useCallback(() => {
      setShouldBeUpdated(true)
      return () => setShouldBeUpdated(false)
    }, [updateData])
  )

  useInterval(() => {
    shouldBeUpdated ? updateData() : null
  }, QUOTES_UPDATE_INTERVAL)

  if (!data) return <Loader />
  return <Quotes quotes={data} error={error} />
}
