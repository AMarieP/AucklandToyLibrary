import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native'
import { useContext, useEffect, useState, useRef } from 'react'
import { useNavigation } from '@react-navigation/native';
import { Button, Dialog } from '@rneui/themed'
import React from 'react'
import colours from '../../colours'
import Screen from '../smallElements/Screen'
import CartCard from '../cart/CartCard'
import SemiCircle from '../smallElements/SemiCircle'

import { CartContext } from '../../context/CartContext'

const CartPage = () => {
  
  const [setCart, cartContents, incrementQuant, total] = useContext(CartContext)
  const [cart, setMyCart] = useState(cartContents)
  const [myTotal, setMyTotal] = useState(total)
  const navigation = useNavigation();
  const [isVis, setVis] = useState(false);

  

  useEffect(() => {
    setMyCart(cartContents)    
    
  },[myTotal]);

  const confirmIs = () => {
    setVis(!isVis);
  };

  return (
    <Screen>
          <View style={[{flex: 1}]}>
            <SemiCircle colour={colours.darkest} backgroundColour={colours.green}>Cart</SemiCircle>
          </View>
          <Dialog
      isVisible={isVis}
      onBackdropPress={confirmIs}
    >
      <Dialog.Title title="Dialog Title"/>
      <Text>Dialog body text. Add relevant information here.</Text>
    </Dialog>
          <SafeAreaView style={[{flex: 4}]}>
          <FlatList
            style={{margin: 2}}
              numColumns={1}
              data={cart}
              renderItem={({item}) => <CartCard product={item} />}
              keyExtractor={item => item.id}/>
          </SafeAreaView>
          <View style={styles.cartButtons} >
            <Text style={styles.total} >your total: ${total}</Text>
            <Button
                  onPress={() => {confirmIs}}
                  title="place order"
                  raised
                  buttonStyle={{
                    backgroundColor: colours.brick,
                  }}
                  containerStyle={{
                    width: '90%',
                    marginVertical: 2
                  }}
                  titleStyle={{ marginHorizontal: 20, color: colours.yellow, fontFamily: 'Manrope_600SemiBold', fontSize: 25 }}
                />
                <Button
                  title="browse more"
                  onPress={() => navigation.navigate('all')}
                  raised
                  buttonStyle={{
                    backgroundColor: colours.purple,
                  }}
                  containerStyle={{
                    width: '90%',
                    marginVertical: 2

                  }}
                  titleStyle={{ marginHorizontal: 20, color: colours.cream, fontFamily: 'Manrope_400Regular', fontSize: 25 }}
                />
                <Button
                  title="empty your cart"
                  raised
                  buttonStyle={{
                    backgroundColor: colours.blue,
                  }}
                  containerStyle={{
                    width: '90%',
                    marginVertical: 2

                  }}
                  titleStyle={{ marginHorizontal: 10, color: colours.cream, fontFamily: 'Manrope_400Regular', fontSize: 10 }}
                />
          </View>
    </Screen>
  )
}

export default CartPage

const styles = StyleSheet.create({
  cartButtons:{
    height: '20%',
    width: '100%',
    flex: 1,
    backgroundColor: colours.green,
    alignItems: 'center',
    paddingVertical: '3%',
  },
  total:{
    fontFamily: 'Manrope_400Regular',
    fontSize: 30,
    color: colours.cream,
    alignSelf: 'flex-end',
    marginRight: '10%',
    marginBottom: '5%',
    marginTop: '5%',
  }
})