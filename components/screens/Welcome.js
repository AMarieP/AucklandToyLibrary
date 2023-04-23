import { StyleSheet, Text, View, FlatList, TouchableOpacity, SafeAreaView } from 'react-native'
import { useNavigation } from '@react-navigation/native';

import React from 'react'
import colours from '../../colours'
import Screen from '../smallElements/Screen'

import WelcomeImage from '../welcomePg/WelcomeImage'
import SmallBrickShapes from '../welcomePg/SmallBrickShapes'
import ToyPileInfographic from '../welcomePg/ToyPileInfographic'
import MyBrowsingCard from '../welcomePg/MyBrowsingCard'
import Circle from '../smallElements/Circle'
import SemiCircle from '../smallElements/SemiCircle'
import myData from '../FakeData'
import ToyProductCard from '../product/ToyProductCard'
import MyH2 from '../text/MyH2'
import { Icon, Button } from '@rneui/themed'
import MyAppText from '../text/MyAppText'
import MyH1 from '../text/MyH1'



const Welcome = () => {

  const navigation = useNavigation();


  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'Under $5',
      range: '5',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: '$10 and Under',
      range: '10',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: '$35 and Under',
      range: '35',
    },
  ];

  const hello = 'heello'

  return (
    <Screen style={{width: '100%'}}>
      <View style={styles.welcome} >
        <View style={{width:'100%'}}>
        <WelcomeImage height={500} width={'100%'} />
        </View>
        <Icon style={styles.arrow} name='arrow-down-sharp' type='ionicon' color={colours.cream} />
      </View>
      <View style={styles.aboutContainer}>
        <View style={{width: '80%'}} >
        <MyH2 colour={colours.cream}>Kids love toys. But we all know toys can make a lot of clutter, and new toys are expensive. Auckland Toy Library seeks to help you and your kids reduce the clutter, cost and waste with second-hand toys at accessible prices.</MyH2>
        </View>
        <SmallBrickShapes style={{margin: '40%'}} />
      </View>
      <View style={styles.shopAllContainer} >
        <Circle colour={colours.blue}>
          <MyH2 colour={colours.brick} >PLAY SUSTAINABLY</MyH2>
          <Button onPress={() => navigation.navigate('all')}
                  title="shop now"
                  raised
                  buttonStyle={{
                    backgroundColor: colours.brick,
                  }}
                  containerStyle={{
                    width: '40%',
                    marginVertical: 2

                  }}
                  
                  titleStyle={{ marginHorizontal: 10, color: colours.yellow, fontFamily: 'Manrope_400Regular', fontSize: 20 }}
                />
        </Circle>
      </View>
      <View style={styles.containerBrowseBy} >
        <MyH1 colour={colours.brick} >BROWSE BY</MyH1>
        <View style={{flex: 1, flexGrow: 3}}>
        <FlatList
        style={{marginHorizontal: 2}}
          data={DATA}
          renderItem={({item}) => <TouchableOpacity onPress={() => navigation.navigate('all', {theRange: item.range})}><MyBrowsingCard>{item.title}</MyBrowsingCard></TouchableOpacity>}
          keyExtractor={item => item.id}/>
        </View>
      </View>
      <View style={styles.containerDidYouKnow}>
        <View style={{flex: 1, marginTop: '30%', alignSelf: 'flex-start'}} >
          <Text style={{fontFamily: 'AnticDidone_400Regular', fontSize: 30, color: colours.cream, backgroundColor: colours.brick, borderBottomRightRadius: 50, borderTopRightRadius: 50, paddingHorizontal: 10, paddingVertical: 10}} >Did You Know?</Text>
        </View>
        <View style={{flex: 2, marginTop: 0}} >
          <ToyPileInfographic height={'100%'} />
        </View>
        <View style={{flex: 2, width: '80%'}} >
          <MyAppText color={colours.darkest} >67% of your childs toys sit neglected in your home.  Reduce your own clutter, buy second hand, and let your kids play in a way that is kind on our earth. </MyAppText>
        </View>
      </View>
      <View style={styles.containerNewIn} >
        <SemiCircle colour={colours.brick} backgroundColour={colours.blue} >new in</SemiCircle>
        <FlatList
        style={{marginHorizontal: 2, backgroundColor: colours.blue}}
          numColumns={2}
          data={myData}
          renderItem={({item}) => <ToyProductCard product={item} />}
          keyExtractor={item => item.id}/>
      </View>
    </Screen>
  )
}

export default Welcome

const styles = StyleSheet.create({
  welcome:{
    flex: 1,
    backgroundColor: colours.green,
    width: '100%',
    alignItems: 'flex-end',
    justifyContent: 'center',
    padding: 0,

  },
  arrow:{
    padding: '10%',
    marginRight: '10%'
    
  },

  aboutContainer:{
    flex: 1,
    width: '100%',
    backgroundColor: colours.green,
    height: '900%',
    paddingTop: '50%',
    paddingBottom: '60%',
    paddingLeft: 30 


  },
  shopAllContainer:{
    flex: 1,
    width: '100%',
    height: '100%',
    marginBottom: '80%',
    marginTop: '-40%',
    alignItems: 'center'

  },
  containerBrowseBy:{
    flex: 1,
    flexGrow: 3,
    width: '100%',
  },

  containerDidYouKnow:{
    flex: 1,
    width: '100%',
    height: 600,
    alignItems: 'center',
    justifyContent: 'space-around',

  },
  containerNewIn:{
    flex: 2,
    width: '100%',
    alignItems: 'center',
    marginTop: '10%'



  }

})