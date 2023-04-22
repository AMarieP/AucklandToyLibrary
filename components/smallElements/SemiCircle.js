import { StyleSheet, Text, View, Dimensions } from 'react-native'
import MyH1 from '../text/MyH1'
import React from 'react'
import colours from '../../colours'

const SemiCircle = props => {
  return (
    <View
    style = {[styles.heading, {
        width: Dimensions.get('window').width * 0.7,
        height: Dimensions.get('window').width * 0.3555,
        borderTopLeftRadius: 150,
        borderTopRightRadius: 150,
        backgroundColor: props.backgroundColour,
        justifyContent: 'flex-end',
        alignItems: 'center'
      }]}>
        <View style={styles.text} ><MyH1 colour={props.colour}>{props.children}</MyH1></View>
    </View>
  )
}

export default SemiCircle

const styles = StyleSheet.create({
  text:{
    marginBottom: 10,
  }

})