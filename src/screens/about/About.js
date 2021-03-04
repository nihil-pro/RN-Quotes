import app from '../../../app.json'
import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import { TableRow } from '../../components/TableRow'

export const About = () => {
  const { name, version, } = app.expo

  const data = {
    'App name': name,
    'App version': version
  }

  return (
    <ScrollView contentContainerStyle={style.container}>
      {Object.entries(data).map(([label, value]) => (
        <TableRow
          key={label+value}
          label={label}
          value={value}
        />
      ))}
    </ScrollView>
  )
}

const style = StyleSheet.create({
  container: {
    marginTop: 25,
    paddingLeft: 15,
    paddingRight: 15,
    borderBottomWidth: .5,
    borderTopWidth: .5,
    borderColor: '#ccc',
    backgroundColor: '#fff'
  }
})
