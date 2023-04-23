import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native'
import { Icon } from '@rneui/themed';
import MyH2 from '../text/MyH2';
import colours from '../../colours';
import React from 'react';
import BackgroundBrickStack from '../smallElements/BackgroundBrickStack';

const NavigationBar = () => {
  return (
    <View style={styles.container} >
      <TouchableOpacity><Icon name='shopping-bag' type='FontAwesome5' color={colours.cream} /></TouchableOpacity>
      <TouchableOpacity style={styles.logo}>
        <BackgroundBrickStack width={50} height={50} />
      </TouchableOpacity>
      <TouchableOpacity><Icon name='shopping-cart' type='FontAwesome5' color={colours.cream} /></TouchableOpacity>
    </View>
  )
}

export default NavigationBar



const styles = StyleSheet.create({
  container:{
    backgroundColor: colours.brick,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: '3%',
    width: Dimensions.get('window').width,
  },
  logo:{
  }

})