import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

const CustomButton = props => {
  return (
    <Button
    style={styles.button}
    title={props.name}
    onPress={() => Alert.alert('Button with adjusted color pressed')}/>
  )
}

export default CustomButton

const styles = StyleSheet.create({
  button:{
    backgroundColor: '#E9795B',
    color: '#F1DD40',
    elevation: 2,
    width: '500px'
  }
    
})