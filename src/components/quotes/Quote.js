import React from 'react'
import { StyleSheet, View } from 'react-native'
import { observer } from 'mobx-react'
import { Symbol } from './Symbol'
import { Value } from './Value'
import { Percent } from './Percent'

export const Quote = observer(({ symbol, quote, isEven }) => {

  return (
    <View style={{...styles.quote, ...styles[isEven]}} >

      <Symbol symbol={symbol} />

      <View style={styles.block}>

        <View>
          <Value value={quote.last} />
          <Value value={quote.highestBid} />
        </View>

        <Percent
          alignment={'flex-end'}
          value={quote.percentChange}
          postfix={'%'}
        />

      </View>

    </View>
  )
})

const styles = StyleSheet.create({
  quote: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
    borderBottomWidth: .5,
    borderColor: '#ddd'
  },
  block: {
    width: '60%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  even: {
    backgroundColor: '#f2f2f2'
  },
  odd: {
    backgroundColor: '#fff'
  }
})
