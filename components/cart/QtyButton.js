import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import React, { useState, useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Icon } from '@rneui/themed'
import colours from '../../colours'

const QtyButton = ({product}) => {
  const [updateCart, cartContents, incrementQuant] = useContext(CartContext)
  const itemQuant = product.quantity
  const[quantity, setQuantity] = useState(itemQuant)
  return (
    <View style={styles.buttonView}>
        <TouchableOpacity onPress={() => {incrementQuant(product, true), setQuantity(product.quantity)}}><Icon name='plus-circle' type='font-awesome' color={colours.blue} /></TouchableOpacity>
        <Text style={styles.quant} >{quantity}</Text>
        <TouchableOpacity onPress={() => {incrementQuant(product, false), setQuantity(product.quantity)}}><Icon name='minus-circle' type='font-awesome' color={colours.blue} /></TouchableOpacity>
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