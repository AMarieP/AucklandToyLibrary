import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colours from '../../colours'


const MyH1 = (props) => {
  return (
    <Text style={[styles.h1, {color: props.colour}]}>{props.children}</Text>
  )
}

export default MyH1

const styles = StyleSheet.create({
    h1: {
      fontFamily: 'AnticDidone_400Regular',
      fontSize: 60,
    }
    }
    );