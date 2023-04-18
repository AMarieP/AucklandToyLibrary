import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'

const SemiCircle = props => {
  return (
    <View
    style = {{
        width: Dimensions.get('window').width * 0.7,
        height: Dimensions.get('window').width * 0.3555,
        borderTopLeftRadius: 150,
        borderTopRightRadius: 150,
        backgroundColor: props.colour,
        justifyContent: 'center',
        alignItems: 'center'
      }}
      underlayColor = '#ccc'>
    </View>
  )
}

export default SemiCircle

const styles = StyleSheet.create({})