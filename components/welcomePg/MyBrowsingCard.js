import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BrowsingCard from './BrowsingCard'

const MyBrowsingCard = (props) => {
  return (
    <View style={{width: '100%', height: 400}} >
        <View style={{ width: '100%', height:'100%'}} ><BrowsingCard height={'90%'} width={'100%'}/></View>
        <View style={{position: 'absolute', zIndex: 90, top: '45%', left: 110}}><Text style={{fontFamily: 'Manrope_400Regular', fontSize: 20}} >{props.children}</Text></View>
    </View>
  )
}

export default MyBrowsingCard

const styles = StyleSheet.create({})