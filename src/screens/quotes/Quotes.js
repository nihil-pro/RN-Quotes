import React from 'react'
import { View, ScrollView } from 'react-native'
import { Quote } from '../../components/quotes/Quote'
import { Error } from '../../components/Error'
import { Header } from '../../components/quotes/Header'

export const Quotes = ({ quotes, error }) => {
  return (
    <View>
      {error && ( <Error error={error} /> )}

      <ScrollView stickyHeaderIndices={[0]}>

        <Header />

        {Object.entries(quotes).map(([symbol, data], index) => {
          return (
            <Quote
              symbol={symbol}
              key={symbol}
              quote={data}
              isEven={index%2 === 0 ? 'even' : 'odd'}
            />
          )
        })}

      </ScrollView>

    </View>
  )
}