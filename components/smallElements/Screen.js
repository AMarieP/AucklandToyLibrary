import React from "react";
import Constants from "expo-constants";
import colours from "../../colours";
import { StyleSheet, SafeAreaView, View, Dimensions } from "react-native";

function Screen({ children, style }) {
  return (
    <SafeAreaView style={styles.screen}>
      {children}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
    alignItems: 'center',
    width: Dimensions.get('window').width,
    backgroundColor: colours.cream,
    color: 'pink'
  },
});

export default Screen;
