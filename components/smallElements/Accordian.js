import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Icon } from '@rneui/themed';
import React, { useState } from 'react'
import MyAppText from '../text/MyAppText';
import colours from '../../colours';

const Accordian = ({title, content}) => {
    const [toggled, setIsToggled] = useState(false);
    
    //When function is called, set toggled to opposite bool 
    const toggle = () => setIsToggled(!toggled);

  return (
    <View>
        <TouchableOpacity onPress={toggle}>
            <Text>{title}</Text>
            <Icon name={toggled ? 'arrow-up-sharp' : 'arrow-down-sharp'} type='Ionicons' color={colours.blue} />
        </TouchableOpacity>
        {toggled && (
          <MyAppText>{content}</MyAppText>
        )}
    </View>
  )
}

export default Accordian

const styles = StyleSheet.create({})