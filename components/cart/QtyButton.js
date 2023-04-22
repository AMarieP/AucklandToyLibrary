import { StyleSheet, Button, Pressable, View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Icon } from '@rneui/themed'
import colours from '../../colours'

const QtyButton = props => {
    const itemQuant = props.quantity
    const[quantity, setQuantity] = useState(itemQuant)
  return (
    <View style={styles.buttonView}>
        <TouchableOpacity onPress={() => setQuantity(quantity + 1)}><Icon name='plus-circle' type='font-awesome' color={colours.blue} /></TouchableOpacity>
        <Text style={styles.quant} >{quantity}</Text>
        <TouchableOpacity onPress={() => setQuantity(quantity - 1)}><Icon name='minus-circle' type='font-awesome' color={colours.blue} /></TouchableOpacity>
    </View>
  )
}

export default QtyButton

const styles = StyleSheet.create({
  buttonView: {
    flexDirection: 'row',
    padding: '4%',
    alignItems: 'center'
  },
  quant:{
    color: colours.darkest,
    padding: '3%',
    fontSize: 50
  }
    
})