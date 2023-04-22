import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, Image , ScrollView} from 'react-native';
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
    <ScrollView>
      <Screen>
        <AllProducts/>
      </Screen>
    </ScrollView>
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
