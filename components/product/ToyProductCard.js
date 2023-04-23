import { StyleSheet, Text, View, Button, TouchableOpacity, Dimensions, ImageBackground } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import React, { useContext, useState } from 'react'
import { ActiveProductContext } from '../../context/ActiveProduct';
import colours from '../../colours'
import myData from '../FakeData';




const ToyProductCard = ({product}) => {
  const navigation = useNavigation();
  const {currentProduct, setCurrentProduct} = useContext(ActiveProductContext);

  
  return (
    <TouchableOpacity onPress={() => {navigation.navigate('IndividualProduct'); setCurrentProduct(product)}}>
      <View style={[styles.container, 
    {width: Dimensions.get('window').width * 0.46,
    height: Dimensions.get('window').height * 0.4}]} >
        <ImageBackground style={styles.image} source={product.image} resizeMode="cover" accessibilityLabel={product.title}>        
          <View style={styles.header}>
            <Text style={styles.title} >{product.name}</Text>
            <View style={styles.priceContainer}>
              <Text style={styles.dollar}>$</Text>
              <Text style={styles.price}>{product.price}</Text>
            </View>
          </View>
        </ImageBackground>
        <View style={styles.description}>
          <Button style={styles.button} color={colours.brick} title='Select'>Select</Button>
          <Text style={styles.details} >{product.shortDescription}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default ToyProductCard

const styles = StyleSheet.create({
  container:{
    padding: 0,
    borderColor: colours.green,
    borderWidth: 10,
    margin: 5,
    borderRadius: 10,
    // overflow: 'hidden',
    marginBottom: 10,
    justifyContent: 'center',
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
  header: {
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: '100%',
    height: '60%',
    margin: 0,
    padding: 0,
    paddingTop: 10,
  },
  title:{
    backgroundColor: colours.green,
    width: '70%',
    borderBottomRightRadius: 50,
    borderTopRightRadius: 6,
    fontFamily: 'Manrope_400Regular',
    fontSize: 15,
    justifyContent: 'center',
    color: colours.cream,
    paddingLeft: '5%',
    paddingVertical: '2%',
    flex: 4
  },
  priceContainer:{
    backgroundColor: colours.cream,
    width: 50,
    height: 50,
    borderColor: colours.blue,
    borderBottomLeftRadius: 50,
    borderTopLeftRadius: 50,
    borderWidth: 1,
    marginLeft: 5,
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 6,
    paddingRight: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: "center",
  },
  price: {
    color: colours.blue,
    fontFamily: "AnticDidone_400Regular",
    fontSize: 30,
  },
  dollar: {
    color: colours.blue,
    fontFamily: "AnticDidone_400Regular",
    fontSize: 10,
  },
  image:{
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: 'blue',
    padding: 0,
    margin: 0,
    alignItems: 'flex-start',
    justifyContent: 'flex-start'

  },
  details:{
    fontFamily: 'Manrope_400Regular',
    fontSize: 15,
    color: colours.darkest,
    height: '100%',
    paddingTop: 3,
    textAlignVertical: 'top',
    textAlign: 'center'

  },
  button: {
    backgroundColor: colours.backgroundColor

  },
  description:{
    backgroundColor: colours.cream,
    width:'100%',
    height: '40%',

  },


})