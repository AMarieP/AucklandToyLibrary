import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useState } from 'react'
import QtyButton from './QtyButton'

const cartCard = props => {
  const [quantity, setQuantity] = useState(0)
  return (
    <View>
      <Image/>
      <Text>ItemName</Text>
      <Text>IDNumber</Text>
      <QtyButton />
    </View>
  )
}

export default cartCard

const styles = StyleSheet.create({})