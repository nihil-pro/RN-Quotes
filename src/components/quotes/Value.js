import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { observer } from 'mobx-react'
import { usePrevious } from '../../hooks/previous.hook'
import {QUOTES_NUMBER_OF_DECIMAL} from '../../../constants'

export const Value = observer(({ value }) =>  {

  const prevValue = usePrevious(value)

  const setColor = () => {
    if (prevValue > value) {
      return '#dc3545'
    } else if (prevValue < value) {
      return '#28a745'
    } else {
      return '#000'
    }
  }

  return (
    <View style={{...styles.block}}>
      <Text style={{ color: setColor() }}>
        {toFixed(value)}
      </Text>
    </View>
  )
})

const styles = StyleSheet.create({
  block: {
    flex: 1,
    flexDirection: 'row'
  }
})

const toFixed = (value) => {
  return Number(value).toFixed(QUOTES_NUMBER_OF_DECIMAL)
}