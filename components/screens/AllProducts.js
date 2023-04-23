import { StyleSheet, View, FlatList, TouchableOpacity, SafeAreaView } from 'react-native'
import React from 'react'
import myData from '../FakeData'
import MyH2 from '../text/MyH2'
import ToyProductCard from '../product/ToyProductCard'
import SemiCircle from '../smallElements/SemiCircle'
import colours from '../../colours'
import Screen from '../smallElements/Screen'


const AllProducts = () => {
  return (
    <Screen>
      <View style={[{flex: 1}]}>
        <SemiCircle colour={colours.brick} backgroundColour={colours.blue}>shop</SemiCircle>
      </View>
      <View style={styles.sortContainer} >
        <MyH2 colour={colours.brick}>sort by:</MyH2>
        <TouchableOpacity style={styles.sortOptions}>
          <MyH2 colour={colours.brick}>all</MyH2>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sortOptions}>
          <MyH2 colour={colours.brick}>$5</MyH2>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sortOptions}>
          <MyH2 colour={colours.brick}>$10</MyH2>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sortOptions}>
          <MyH2 colour={colours.brick}>$35</MyH2>
        </TouchableOpacity>

      </View>
      <SafeAreaView style={[{flex: 2}]}>
        <FlatList
        style={{margin: 2}}
          numColumns={2}
          data={myData}
          renderItem={({item}) => <ToyProductCard title={item.name} image={item.image} price={item.price} shortDescription={item.shortDescription} />}
          keyExtractor={item => item.id}/>
      </SafeAreaView>
    </Screen>
  )
}

export default AllProducts

const styles = StyleSheet.create({
  sortContainer:{
    flexDirection: 'row',
    backgroundColor: colours.green,
    width: '100%',
    justifyContent: 'center',
    paddingTop: '2%',
    paddingBottom: '2%',
    flex: 1,
  },
  sortOptions:{
    paddingLeft: '2%',
    paddingRight: '2%',
  }

})