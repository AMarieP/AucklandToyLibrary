import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colours from '../../colours'

const MyAppText = (props) => {
  return (
    <Text style={styles.p}>{props.children}</Text>
  )
}

export default MyAppText

const styles = StyleSheet.create({
    p: {
      fontFamily: 'Manrope_400Regular',
      fontSize: 20,
      color: colours.darkest,
    }
  })