import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

export const Error = ({error}) => (
  <View style={styles.error}>
    <Text style={styles.errorText}>
      {error}
    </Text>
  </View>
)

const styles = StyleSheet.create({
  error: {
    padding: 6,
    backgroundColor: 'rgba(231,93,106,0.1)',
    alignItems: 'center'
  },
  errorText: {
    color: '#dc3545',
    fontSize: 16
  }
})