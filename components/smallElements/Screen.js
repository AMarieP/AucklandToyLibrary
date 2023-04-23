import React from "react";
import Constants from "expo-constants";
import colours from "../../colours";
import { StyleSheet, SafeAreaView, Dimensions, ScrollView } from "react-native";
import Footer from "../navigation/Footer";

function Screen({ children, style }) {
  return (
    <ScrollView nestedScrollEnabled={true}>
      <ScrollView horizontal={true} nestedScrollEnabled={true}>
        <SafeAreaView style={[styles.screen, {width: Dimensions.get('window').width,}]}>
          {children}
          <Footer />
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
