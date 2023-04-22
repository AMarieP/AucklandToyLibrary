import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import myData from '../FakeData'
import ToyProductCard from '../product/ToyProductCard'
import SemiCircle from '../smallElements/SemiCircle'

const AllProducts = () => {
  return (
    <View>
      <SemiCircle>shop</SemiCircle>
      <View>
        {myData.map((datas, i) => <ToyProductCard key={myData[i].id} image={myData[i].image} title={myData[i].name} price={myData[i].price} shortDescription={myData[i].shortDescription}></ToyProductCard>)}
      </View>
    </View>
  )
}

export default AllProducts

const styles = StyleSheet.create({})