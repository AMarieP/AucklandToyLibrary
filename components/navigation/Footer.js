import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import React from 'react'
import colours from '../../colours'
import MyH2 from '../text/MyH2'
import Bridge from '../smallElements/Bridge'

const Footer = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Bridge colour={colours.brick} backgroundColor={colours.blue} />
      <View style={styles.footerOptions}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}><MyH2 colour={colours.darkest}>home</MyH2></TouchableOpacity>
        <MyH2 colour={colours.darkest}>|</MyH2>
        <TouchableOpacity onPress={() => navigation.navigate('cart')}><MyH2 colour={colours.darkest}>cart</MyH2></TouchableOpacity>
        <MyH2 colour={colours.darkest}>|</MyH2>
        <TouchableOpacity onPress={() => navigation.navigate('all')}><MyH2 colour={colours.darkest}>shop</MyH2></TouchableOpacity>
      </View>
      <View style={styles.copyrightContainer}><Text style={{color: colours.orange}}>©alyssapilbrow2023</Text></View>
    </View>
  )
}

export default Footer

const styles = StyleSheet.create({
  container:{
    marginTop: '70%'

  },
  footerOptions:{
    backgroundColor: colours.green,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingTop: '5%',
    paddingBottom: '5%',
    paddingLeft: '3%',
    paddingRight: '3%'
  },
  copyrightContainer:{
    backgroundColor: colours.yellow,
    alignItems: 'center',
    paddingTop: '1%',
    paddingBottom: '1%'
  }
})