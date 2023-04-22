import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native'
import { Button } from '@rneui/themed'
import React from 'react'
import colours from '../../colours'
import Screen from '../smallElements/Screen'
import CartCard from '../cart/CartCard'
import myData from '../FakeData'
import SemiCircle from '../smallElements/SemiCircle'

const CartPage = () => {

  return (
    <Screen style={[{flex: 1}]}>
          <View style={[{flex: 1}]}>
            <SemiCircle colour={colours.darkest} backgroundColour={colours.green}>Cart</SemiCircle>
          </View>
          <SafeAreaView style={[{flex: 4}]}>
            <FlatList
            style={{margin: 2}}
              numColumns={1}
              data={myData}
              renderItem={({item}) => <CartCard name={item.name} image={item.image} price={item.price} shortDescription={item.shortDescription} quant={0} />}
              keyExtractor={item => item.id}/>
          </SafeAreaView>
      <View style={styles.cartButtons} >
        <Text style={styles.total} >your total: $</Text>
        <Button
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