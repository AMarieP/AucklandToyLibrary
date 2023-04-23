import { StyleSheet, View, FlatList, TouchableOpacity, SafeAreaView } from 'react-native'
import React, { useContext, useState, useEffect } from 'react'
import myData from '../FakeData'
import MyH2 from '../text/MyH2'
import ToyProductCard from '../product/ToyProductCard'
import SemiCircle from '../smallElements/SemiCircle'
import colours from '../../colours'
import Screen from '../smallElements/Screen'

const AllProducts = ({theRange}) => {
  const [range, setRange] = useState(theRange)
  const [data, setData] = useState(myData)
  
  function SortProducts(){
    let newData = []
    if(range > 0){
      for(let i = 0; i < myData.length; i++){
        if(myData[i].price <= range){
          console.log(myData[i])
          newData.push(myData[i])
          console.log(newData)
        }
      // console.log(newData)
    }}else{
      newData = myData
    }
    return newData
    
  }

  useEffect(() => {
    let x = SortProducts()
    // console.log(x)
    setData(x)
  }, [range])

  return (
    <Screen>
      <View style={[{flex: 1}]}>
        <SemiCircle colour={colours.brick} backgroundColour={colours.blue}>shop</SemiCircle>
      </View>
      <View style={styles.sortContainer} >
        <MyH2 colour={colours.brick}>sort by:</MyH2>
        <TouchableOpacity style={styles.sortOptions} onPress={() => setRange(0)} >
          <MyH2 colour={colours.brick}>all</MyH2>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sortOptions} onPress={() => setRange(5)}>
          <MyH2 colour={colours.brick}>$5</MyH2>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sortOptions} onPress={() => setRange(10)}>
          <MyH2 colour={colours.brick}>$10</MyH2>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sortOptions} onPress={() => setRange(35)}>
          <MyH2 colour={colours.brick}>$35</MyH2>
        </TouchableOpacity>

      </View>
      <SafeAreaView style={[{flex: 2}]}>
        <FlatList
        style={{margin: 2}}
          numColumns={2}
          data={data}
          renderItem={({item}) => <ToyProductCard product={item} />}
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