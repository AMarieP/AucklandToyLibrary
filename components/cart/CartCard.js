import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import React, { useState } from 'react'
import QtyButton from './QtyButton'
import colours from '../../colours'

const CartCard = ({image, quant, name, ID}) => {
  const [quantity, setQuantity] = useState(0)
  return (
    <View style={styles.containerMain} >
      <Image style={styles.prodImage} source={image} resizeMode="cover" accessibilityLabel={name}/>
      <View style={styles.container}>
        <View style={styles.containerDetails} >
          <Text style={styles.name} adjustsFontSizeToFit={true}>{name}</Text>
          <Text style={styles.prodID} >Product ID: {ID}</Text>
        </View>
        <QtyButton style={styles.quantBtn} quantity={quant} />
      </View>
    </View>
  )
}

export default CartCard

const styles = StyleSheet.create({
  containerMain:{
    width: Dimensions.get('window').width * 0.9,
    height: Dimensions.get('window').height * 0.2,
    margin: '3%',
    borderColor: colours.green,
    borderRadius: 10,
    borderWidth: 3,
    backgroundColor: colours.cream,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,

  },
  prodImage:{
    height: '90%',
    flex: 4,
    margin: '3%',
    borderRadius: 10,
  },
  container:{
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 7,
  },
  containerDetails:{
    flex: 2,

  },
  quantBtn:{
    flex: 1,

  },
  name:{
    fontFamily: 'Manrope_600SemiBold',
    fontSize: 20,
    color: colours.darkest,
  },
  prodID:{
    fontFamily: 'Manrope_300Light',
    fontSize: 10,
    color: colours.darkest,
  }
})