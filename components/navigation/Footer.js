import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'

import Bridge from '../smallElements/Bridge'

const Footer = () => {
  return (
    <View>
      <Bridge colour='black'/>
      <View >
        <Text>home</Text>
        <Text>cart</Text>
        <Text>shop</Text>
      </View>
      <View><Text>alyssapilbrow</Text></View>
    </View>
  )
}

export default Footer

const styles = StyleSheet.create({})