import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import colours from '../../colours'
import Screen from '../smallElements/Screen'

import WelcomeImage from '../welcomePg/WelcomeImage'
import SmallBrickShapes from '../welcomePg/SmallBrickShapes'
import ToyPileInfographic from '../welcomePg/ToyPileInfographic'
import BrowsingCard from '../welcomePg/BrowsingCard'
import Circle from '../smallElements/Circle'
import SemiCircle from '../smallElements/SemiCircle'
import myData from '../FakeData'
import ToyProductCard from '../product/ToyProductCard'


const Welcome = () => {
  return (
    <Screen style={{width: '100%'}}>
      <View style={styles.welcome} >
        <Text>Hi</Text>
        <WelcomeImage height={500} />
      </View>
      <View style={styles.aboutContainer}>
        <Text>Kids love toys. But we all know toys can make a lot of clutter, and new toys are expensive. Auckland Toy Library seeks to help you and your kids reduce the clutter, cost and waste with second-hand toys at accessible prices.</Text>
        <SmallBrickShapes />
      </View>
      <View style={styles.shopAllContainer} >
        <Circle />
      </View>
      <View style={styles.containerBrowseBy} >
        <BrowsingCard />
      </View>
      <View style={styles.containerDidYouKnow}>
        <Text>Did You Know?</Text>
        <ToyPileInfographic />
        <Text>67% of your child’s toys sit neglected in your home.  Reduce your own clutter, buy second hand, and let your kids play in a way that is kind on our earth. </Text>
      </View>
      <View style={styles.containerNewIn} >
        <SemiCircle>new in</SemiCircle>
        <FlatList
        style={{margin: 2}}
          numColumns={2}
          data={myData}
          renderItem={({item}) => <ToyProductCard title={item.name} image={item.image} price={item.price} shortDescription={item.shortDescription} />}
          keyExtractor={item => item.id}/>
      </View>
    </Screen>
  )
}

export default Welcome

const styles = StyleSheet.create({
  welcome:{
    flex: 1,
    backgroundColor: 'blue',
    width: '100%',

  },
  aboutContainer:{
    flex: 2,
    width: '100%',
    backgroundColor: 'pink',



  },
  shopAllContainer:{
    flex: 1,
    width: '100%',
    backgroundColor: 'green',



  },
  containerBrowseBy:{
    flex: 1,
    width: '100%',
    backgroundColor:'red',



  },
  containerDidYouKnow:{
    flex: 1,
    width: '100%',
    backgroundColor:'orange'



  },
  containerNewIn:{
    flex: 2,
    width: '100%',
    backgroundColor: 'purple'



  }

})