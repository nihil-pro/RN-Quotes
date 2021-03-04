import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator
} from 'react-native'

export const Loader = () => (
  <View style={styles.container}>
    <ActivityIndicator color={'#fd7e14'} />
    <Text style={styles.text}>
      Загрузка данных...
    </Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    marginTop: 10,
    color: '#848484'
  }
})