import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colours from '../../colours'


const MyH2 = (props) => {
  return (
    <Text style={[styles.h2, {color: props.colour}]}>{props.children}</Text>
  )
}

export default MyH2

const styles = StyleSheet.create({
    h2: {
      fontFamily: 'AnticDidone_400Regular',
      fontSize: 32,
    }
    }
    );