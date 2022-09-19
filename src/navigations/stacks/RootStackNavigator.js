import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import MainStack from "./mainStack";

const rootnavigator = createNativeStackNavigator();
export default function RootStackNavigator() {
  return (
    <rootnavigator.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="root"
    >
      <rootnavigator.Screen name="root" component={MainStack} />
    </rootnavigator.Navigator>
  );
}
