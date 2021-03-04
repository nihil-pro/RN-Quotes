import React from 'react'
import {
  StyleSheet,
  View,
  Text
} from 'react-native'
import { QUOTES_LIST_HEADER_LABELS } from '../../../constants'

export const Header = () => {
  const {symbol, last, highestBid, percentChange} = QUOTES_LIST_HEADER_LABELS

  return (
    <View style={styles.header}>
      <Text style={styles.symbol}>
        {symbol}
      </Text>
      <View style={styles.block}>
        <View>
          <Text>{last}</Text>
          <Text>{highestBid}</Text>
        </View>
        <Text style={{...styles.symbol, textAlign: 'right'}}>
          {percentChange}
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 10,
    paddingTop: 10,
    borderBottomWidth: .5,
    borderColor: '#fafafa',
    backgroundColor: '#fafafa'
  },
  block: {
    width: '60%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  symbol: {
    fontSize: 18,
    width: '40%',
    color: '#E6413C'
  }
})