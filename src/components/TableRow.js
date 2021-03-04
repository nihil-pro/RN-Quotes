import React from 'react'
import {
  StyleSheet,
  Platform,
  View,
  Text
} from 'react-native'

export const TableRow = ({ label, value }) => (
  <View style={styles.row}>
    <Text style={styles.text}>
      {label}
    </Text>
    <Text style={styles.text}>
      {value}
    </Text>
  </View>
)

const styles = StyleSheet.create({
  row: {
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#fff',
    ...Platform.select({
      android: {
        flexDirection: 'column'
      },
      ios: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: .5,
        borderColor: '#ccc',
      }
    })
  },
  text: {
    fontSize: 16
  }
})