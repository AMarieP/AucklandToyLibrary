import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import IndividualProduct from './components/screens/IndividualProduct';
import BackgroundBrickStack from './components/smallElements/BackgroundBrickStack';
import AllProducts from './components/screens/AllProducts';
import CartPage from './components/screens/CartPage';
import Welcome from './components/screens/Welcome';
import colours from './colours';
import { Icon } from '@rneui/themed';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function Root() {
  return (
    <Tab.Navigator useLegacyImplementation
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === 'all') {
              return (
                <Icon name='shopping-bag' type='FontAwesome5' color={color} />
              );
            } else if (route.name === 'Home') {
              return (
                <BackgroundBrickStack width={50} height={50} color={color} />
              );
            } else if (route.name === 'cart') {
              return (
                <Icon name='shopping-cart' type='FontAwesome5' color={color} />
              );
            }
          },
          tabBarInactiveTintColor: colours.cream,
          tabBarActiveTintColor: colours.green,
          tabBarShowLabel: false,
          tabBarStyle:{
            backgroundColor: colours.brick
          },
          headerShown: false,
        })}
      >
        <Tab.Screen 
          name="all" 
          component={AllProducts} />
        <Tab.Screen
          name="Home"
          component={Welcome}/>
        <Tab.Screen 
          name="cart" 
          component={CartPage} />


      </Tab.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Root" component={Root} />
        <Stack.Screen name="IndividualProduct" component={IndividualProduct} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;


// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, View, Text, Image , ScrollView} from 'react-native';
// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { Ionicons } from '@expo/vector-icons';
// import { Icon } from '@rneui/themed';



// import AppLoading from 'expo-app-loading';
// import colours from './colours';
// import myData from './components/FakeData';


// import Footer from './components/navigation/Footer';
// import Circle from './components/smallElements/Circle';
// import Bridge from './components/smallElements/Bridge';
// import SemiCircle from './components/smallElements/SemiCircle';
// import CustomButton from './components/smallElements/CustomButton';
// import QtyButton from './components/cart/QtyButton';
// import MyAppText from './components/text/MyAppText';
// import Screen from './components/smallElements/Screen';
// import ToyProductCard from './components/product/ToyProductCard';
// import AllProducts from './components/screens/AllProducts';
// import Accordian from './components/smallElements/Accordian';
// import CartCard from './components/cart/CartCard';
// import CartPage from './components/screens/CartPage';
// import Welcome from './components/screens/Welcome';
// import BrowsingCard from './components/welcomePg/BrowsingCard';
// import WelcomeImage from './components/welcomePg/WelcomeImage';
// import BackgroundBrickStack from './components/smallElements/BackgroundBrickStack';


// // Font Imports
// import { useFonts, AnticDidone_400Regular } from '@expo-google-fonts/antic-didone';
// import {
//   Manrope_200ExtraLight,
//   Manrope_300Light,
//   Manrope_400Regular,
//   Manrope_500Medium,
//   Manrope_600SemiBold,
//   Manrope_700Bold,
//   Manrope_800ExtraBold,
// } from '@expo-google-fonts/manrope';
// import MyH1 from './components/text/MyH1';
// import NavigationBar from './components/navigation/NavigationBar';
// import IndividualProduct from './components/screens/IndividualProduct';

// const Stack = createNativeStackNavigator();


// //Tab Navigator
// const Tab = createBottomTabNavigator();

// function MyTabs() {
//   return (
//     <Tab.Navigator
//         screenOptions={({ route }) => ({
//           tabBarIcon: ({ focused, color, size }) => {
//             if (route.name === 'all') {
//               return (
//                 <Icon name='shopping-bag' type='FontAwesome5' color={color} />
//               );
//             } else if (route.name === 'Home') {
//               return (
//                 <BackgroundBrickStack width={50} height={50} color={color} />
//               );
//             } else if (route.name === 'cart') {
//               return (
//                 <Icon name='shopping-cart' type='FontAwesome5' color={color} />
//               );
//             }
//           },
//           tabBarInactiveTintColor: colours.cream,
//           tabBarActiveTintColor: colours.green,
//           tabBarShowLabel: false,
//           tabBarStyle:{
//             backgroundColor: colours.brick
//           },
//           headerShown: false,
//         })}
//       >
//         <Tab.Screen 
//           name="all" 
//           component={AllProducts} />
//         <Tab.Screen
//           name="Home"
//           component={Welcome}/>
//         <Tab.Screen 
//           name="cart" 
//           component={CartPage} />


//       </Tab.Navigator>
//   );
// }


// export default function App() {
//   //Uses Fonts
//   let [fontsLoaded] = useFonts({
//     AnticDidone_400Regular,
//     Manrope_200ExtraLight,
//     Manrope_300Light,
//     Manrope_400Regular,
//     Manrope_500Medium,
//     Manrope_600SemiBold,
//     Manrope_700Bold,
//     Manrope_800ExtraBold,
//   });

//   if (!fontsLoaded) {
//     return <AppLoading/>;
//   }


//   return (
//     <NavigationContainer>
//       <Stack.Screen name='Tabs' component={MyTabs} />
//     </NavigationContainer>

//   );
// }

// const styles = StyleSheet.create({
//   text: {
//     flex: 1,
//     backgroundColor: colours.brick,
//     alignItems: 'center',
//     justifyContent: 'center',
//     fontFamily: 'AnticDidone_400Regular',
//   },
// });



// {/* <CartCard image={myData[0].image} name={myData[0].name} ID={myData[0].id} quant={1} /> */}


// {/* <ScrollView>
// <ScrollView horizontal={true}>
//     <Welcome />
// </ScrollView>
// </ScrollView> */}