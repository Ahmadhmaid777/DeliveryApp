import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SCREEN_KEY } from "../../utils/constants";
import HomeTabNavigator from "./HomeTabNavigator";
import OrderDelivery from "../../screens/OrderDelivery";
import Resturant from "../../screens/Resturant";
const Main = createNativeStackNavigator();
export default function MainStack() {
  return (
    <Main.Navigator
      initialRouteName={SCREEN_KEY.HOME}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Main.Screen name={SCREEN_KEY.HOME} component={HomeTabNavigator} />
      <Main.Screen name={SCREEN_KEY.ORDER_MAP} component={OrderDelivery} />
      <Main.Screen name={SCREEN_KEY.RESTURANT} component={Resturant} />
    </Main.Navigator>
  );
}
