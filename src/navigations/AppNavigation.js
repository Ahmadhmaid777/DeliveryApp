import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import RootStackNavigator from "./stacks/RootStackNavigator";
import Context from "./Context";
export default function AppNavigation() {
  const data = {
    name: "ahmedHmaid",
  };
  return (
    <Context.Provider value={data}>
      <NavigationContainer>
        <RootStackNavigator />
      </NavigationContainer>
    </Context.Provider>
  );
}
