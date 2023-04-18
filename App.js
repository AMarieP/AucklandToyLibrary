import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Circle from './components/smallElements/Circle';
import ArcTitle from './components/smallElements/SemiCircleTitle';
import Bridge from './components/smallElements/Bridge';
import SemiCircle from './components/smallElements/SemiCircle';
import CustomButton from './components/smallElements/CustomButton';

export default function App() {
  return (
    <View style={styles.container}>
      <CustomButton name='Hello' />
      <ArcTitle/>
      <Text>Open up App.js to start working on 
         app!</Text>
      <Circle colour="#E9795B"></Circle>
      <Bridge colour="#E9795B"/>
      <SemiCircle colour='#E9795B'/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
