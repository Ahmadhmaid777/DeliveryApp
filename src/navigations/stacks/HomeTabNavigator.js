import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Home from "../../screens/Home";
import Tabs from "../../screens/Tabs";
import { HOME_TAB_KEY } from "../../utils/constants";
import { getIconByRouteName, getTabIcon } from "../../helpers/HelpersFunc";
import { TabBarCustomButton } from "../../components/TabBarCustomButton";
const Tab = createBottomTabNavigator();

export default function HomeTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: {
          backgroundColor: "transarent",
          elevation: 0,
          borderTopWidth: 0,
          // position: "absolute",
        },

        tabBarLabel: () => null,
        headerShown: false,
        tabBarIcon: ({ focused }) => {
          return getTabIcon(getIconByRouteName(route.name), focused);
        },
        tabBarButton: (props) => <TabBarCustomButton {...props} />,
      })}
      initialRouteName={HOME_TAB_KEY.RESTURANTS}
    >
      <Tab.Screen name={HOME_TAB_KEY.RESTURANTS} component={Home} />
      <Tab.Screen name={HOME_TAB_KEY.SEARCH} component={Tabs.Search} />
      <Tab.Screen name={HOME_TAB_KEY.FAVORIT} component={Tabs.Favorit} />
      <Tab.Screen name={HOME_TAB_KEY.PROFILE} component={Tabs.Profile} />
    </Tab.Navigator>
  );
}
