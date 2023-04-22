import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, Image , ScrollView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import AppLoading from 'expo-app-loading';
import colours from './colours';
import myData from './components/FakeData';


import Footer from './components/navigation/Footer';
import Circle from './components/smallElements/Circle';
import Bridge from './components/smallElements/Bridge';
import SemiCircle from './components/smallElements/SemiCircle';
import CustomButton from './components/smallElements/CustomButton';
import QtyButton from './components/cart/QtyButton';
import MyAppText from './components/text/MyAppText';
import Screen from './components/smallElements/Screen';
import ToyProductCard from './components/product/ToyProductCard';
import AllProducts from './components/screens/AllProducts';
import Accordian from './components/smallElements/Accordian';
import CartCard from './components/cart/CartCard';
import CartPage from './components/screens/CartPage';
import Welcome from './components/screens/Welcome';
import BrowsingCard from './components/welcomePg/BrowsingCard';
import WelcomeImage from './components/welcomePg/WelcomeImage';

// Font Imports
import { useFonts, AnticDidone_400Regular } from '@expo-google-fonts/antic-didone';
import {
  Manrope_200ExtraLight,
  Manrope_300Light,
  Manrope_400Regular,
  Manrope_500Medium,
  Manrope_600SemiBold,
  Manrope_700Bold,
  Manrope_800ExtraBold,
} from '@expo-google-fonts/manrope';
import MyH1 from './components/text/MyH1';
import NavigationBar from './components/navigation/NavigationBar';
import IndividualProduct from './components/screens/IndividualProduct';

const Stack = createNativeStackNavigator();


export default function App() {
  //Uses Fonts
  let [fontsLoaded] = useFonts({
    AnticDidone_400Regular,
    Manrope_200ExtraLight,
    Manrope_300Light,
    Manrope_400Regular,
    Manrope_500Medium,
    Manrope_600SemiBold,
    Manrope_700Bold,
    Manrope_800ExtraBold,
  });

  if (!fontsLoaded) {
    return <AppLoading/>;
  }


  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Welcome}/>
        <Stack.Screen name="AllProducts" component={AllProducts}/>
      </Stack.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  text: {
    flex: 1,
    backgroundColor: colours.brick,
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'AnticDidone_400Regular',
  },
});



{/* <CartCard image={myData[0].image} name={myData[0].name} ID={myData[0].id} quant={1} /> */}


{/* <ScrollView>
<ScrollView horizontal={true}>
    <Welcome />
</ScrollView>
</ScrollView> */}