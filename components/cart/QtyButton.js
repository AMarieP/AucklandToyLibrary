import { StyleSheet, Button, Pressable, View, Text } from 'react-native'
import React, { useState } from 'react'

const QtyButton = props => {
    const itemQuant = props.quantity
    const[quantity, setQuantity] = useState(itemQuant)
  return (
    <View style={styles.buttonView}>
        <Pressable onPress={() => setQuantity(quantity + 1)}>
            <Text>+</Text>
        </Pressable>
        <Text>{quantity}</Text>
        <Pressable onPress={() => setQuantity(quantity - 1)}>
            <Text>-</Text>
        </Pressable>
    </View>
  )
}

export default QtyButton

const styles = StyleSheet.create({
  buttonView: {

  }
    
})