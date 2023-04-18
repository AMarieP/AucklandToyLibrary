import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SemiCircle from './SemiCircle'

const ArcTitle = () => {
  return (
    <Text>
    <SemiCircle colour="#A5DAD2">
      <Text>
        Title Here
      </Text>
    </SemiCircle>
    </Text>
  )
}

export default ArcTitle

const styles = StyleSheet.create({})