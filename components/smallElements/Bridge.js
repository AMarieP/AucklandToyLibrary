import { Dimensions, StyleSheet, Text, View } from 'react-native'
import { Svg, Path } from 'react-native-svg'
import React from 'react'
import colours from '../../colours'

const Bridge = ({colour, backgroundColor}) => {
  window = Dimensions.get('window').width
  return (
    <Svg style={{backgroundColor: backgroundColor}} width={window} height={window/2} viewBox="0 0 362 181" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Path fill-rule="evenodd" clip-rule="evenodd" 
      d="M0 90V180H27.5H55V175.878C55 168.253 58.078 150.942 61.052 141.842C67.35 122.569 78.068 105.85 93.802 90.757C127.315 58.609 175.912 48.125 220.679 63.385C250.244 73.464 277.064 97.109 291.38 125.717C298.284 139.512 302.37 154.611 303.596 170.851L304.289 180.031L332.395 179.765L360.5 179.5L360.755 89.75L361.011 0H180.505H0V90ZM0.479 90.5C0.479 140 0.601 160.104 0.75 135.175C0.899 110.246 0.899 69.746 0.75 45.175C0.601 20.604 0.479 41 0.479 90.5Z" 
      fill={colour}/>
    </Svg>

  )
}

export default Bridge

const styles = StyleSheet.create({})

