import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { observer } from 'mobx-react'

export const Symbol = observer(({ symbol }) => (
  <View style={styles.block}>
    <Text style={styles.symbol}>
      {symbol}
    </Text>
  </View>
))

const styles = StyleSheet.create({
  block: {
    left: 0,
    width: '40%',
    flexDirection: 'row',
    alignItems: 'center'
  },
  symbol: {
    color: '#000',
    fontSize: 18
  }
})