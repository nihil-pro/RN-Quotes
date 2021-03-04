import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { observer } from 'mobx-react'
import { usePrevious } from '../../hooks/previous.hook'
import { QUOTES_NUMBER_OF_DECIMAL } from '../../../constants'

export const Percent = observer(({ value }) =>  {

  const prevValue = usePrevious(value)

  const setColor = () => {
    if (prevValue > value) {
      return '#dc3545'
    } else if (prevValue < value) {
      return '#28a745'
    } else {
      return '#ddd'
    }
  }

  return (
    <View style={{
      ...styles.block
    }}>
      <Text style={{  color: setColor(),fontSize: 26 }}>
        {toFixed(value)}%
      </Text>
    </View>
  )
})

const styles = StyleSheet.create({
  block: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center'
  }
})

const toFixed = (value) => {
  return Number(value).toFixed(QUOTES_NUMBER_OF_DECIMAL)
}