import { StyleSheet, Text, View, Image, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import SemiCircle from '../smallElements/SemiCircle'
import React, { useContext, useState } from 'react'
import { ActiveProductContext } from '../../context/ActiveProduct';
import { CartContext } from '../../context/CartContext';
import colours from '../../colours'
import Screen from '../smallElements/Screen'
import MyAppText from '../text/MyAppText'
import Accordian from '../smallElements/Accordian';

const IndividualProduct = () => {
  const navigation = useNavigation();
  const {currentProduct} = useContext(ActiveProductContext);
  const [updateCart, cartContents] = useContext(CartContext)
  product = currentProduct

  return (
    <Screen>
      <View style={{width:'100%', padding: 10, alignItems: 'center', flex: 3}}>
        <View style={styles.containerHead}>
          <SemiCircle colour={colours.brick} backgroundColour={colours.blue}>{product.name}</SemiCircle>
        </View>
        <View style={styles.productID} >
          <Text style={styles.prodIDText}>ProductID: {product.id} Price: ${product.price}</Text>
        </View>
        <Image source={product.image} style={styles.image} resizeMode="cover" accessibilityLabel={product.name}/>
        <View style={styles.containerMiddle} >
          <MyAppText>{product.shortDescription}</MyAppText>
          <Button title='add to cart' onPress={() => {updateCart(product), console.log(cartContents)}} />
        </View>
        <Accordian content={product.longDescription}/>
        <Button color={colours.brick} title='browse more toys' onPress={() => navigation.navigate('all')} />
      </View>
    </Screen>
  )
}

export default IndividualProduct

const styles = StyleSheet.create({
  containerHead:{
    backgroundColor: colours.green,
    width:'100%',
    alignItems: 'center',
    paddingTop: '15%'
  },
  productID:{
    minHeight: '4%',
    backgroundColor: colours.orange,
    width: '100%',
    alignItems: 'center',
    paddingVertical: '3%',
  },
  prodIDText:{
    color: colours.darkest,
    fontFamily: 'AnticDidone_400Regular',
    fontSize: 20,
  },
  containerMiddle:{
    height: '16%',
    backgroundColor: colours.yellow,
    width: '100%',
    paddingTop: '5%',
    paddingHorizontal: '7%',
    paddingBottom: '10%',
    justifyContent: 'space-between',
  },
  image:{
    width: '97%',
    height: 450,
    margin: '3%'
  }

})