import React from "react";
import { SafeAreaView, View,StatusBar } from "react-native";
import AppNavigation from "./AppNavigation";
import { Colors } from "./../constants/index";
export default function AppContainer() {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar animated={true} backgroundColor={Colors.backgroundColor} />
      <SafeAreaView style={{ flex: 1 }}>
        <AppNavigation />
      </SafeAreaView>
    </View>
  );
}
