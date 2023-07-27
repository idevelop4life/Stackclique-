import React from 'react'
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import {
  LearnScreen,
  EarnScreen,
  ConnectScreen,
  NotificationScreen,
} from "../../screens";
import Header from "../HomeScreen/Header";

export default function MainTab() {
    const TopTab = createMaterialTopTabNavigator();
    return (
        <TopTab.Navigator tabBar={(props) => <Header {...props} />}>
          <TopTab.Screen name="Learn" component={LearnScreen} />
          <TopTab.Screen name="Earn" component={EarnScreen} />
          <TopTab.Screen name="Connect" component={ConnectScreen} />
          <TopTab.Screen name="Notification" component={NotificationScreen} />
        </TopTab.Navigator>
      );
}
