import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useState } from 'react'

const cartCard = () => {
  const [quantity, setQuantity] = useState(0)
  return (
    <View>
      <Image/>
      <Text>ItemName</Text>
      <Text>IDNumber</Text>
    </View>
  )
}

export default cartCard

const styles = StyleSheet.create({})