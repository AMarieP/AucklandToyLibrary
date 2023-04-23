import { StyleSheet, Dimensions, View, Text } from 'react-native'
import React from 'react'

const Circle = props => {
  return (
    <View
    style = {{
        borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
        width: Dimensions.get('window').width * 0.9,
        height: Dimensions.get('window').width * 0.9,
        backgroundColor: props.colour,
        justifyContent: 'center',
        alignItems: 'center'
      }}
      underlayColor = '#ccc'>
        {props.children}
    </View>
  )
}

export default Circle

const styles = StyleSheet.create({
    
})