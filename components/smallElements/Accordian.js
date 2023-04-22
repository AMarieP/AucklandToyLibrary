import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Icon } from '@rneui/themed';
import React, { useState } from 'react'
import MyAppText from '../text/MyAppText';
import MyH2 from '../text/MyH2';
import colours from '../../colours';

const Accordian = ({content}) => {
    const [toggled, setIsToggled] = useState(false);
    
    //When function is called, set toggled to opposite bool 
    const toggle = () => setIsToggled(!toggled);

  return (
    <View style={styles.container} >
        <TouchableOpacity style={styles.heading} onPress={toggle}>
            <MyH2 colour={colours.brick}>More</MyH2>
            <Icon style={styles.arrow} name={toggled ? 'arrow-up-sharp' : 'arrow-down-sharp'} type='ionicon' color={colours.brick} />
        </TouchableOpacity>
        {toggled && (
          <View style={styles.myText} >
            <MyAppText>{content}</MyAppText>
          </View>
        )}
    </View>
  )
}

export default Accordian

const styles = StyleSheet.create({
    container:{
        width: '100%',
        backgroundColor: colours.green,
        marginBottom: '2%',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },
    heading:{
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingVertical: '5%',
        paddingRight: '5%',
    },
    arrow:{
        padding: '1%'
    },
    myText:{
        minHeight: '40%',
        paddingTop: '5%',
        paddingHorizontal: '7%',
        paddingBottom: '10%'
    }
})