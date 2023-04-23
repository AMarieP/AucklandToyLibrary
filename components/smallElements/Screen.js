import React from "react";
import Constants from "expo-constants";
import colours from "../../colours";
import { StyleSheet, SafeAreaView, View, Dimensions, ScrollView } from "react-native";

function Screen({ children, style }) {
  return (
    <ScrollView>
      <ScrollView horizontal={true}>
        <SafeAreaView style={[styles.screen, {width: Dimensions.get('window').width,}]}>
          {children}
        </SafeAreaView>
        </ScrollView>
    </ScrollView>

  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
    alignItems: 'center',
    backgroundColor: colours.cream,
  },
});

export default Screen;
