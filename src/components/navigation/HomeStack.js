import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { LearnScreen, EarnScreen, ConnectScreen, NotificationScreen } from "../../screens";

import { HomeScreen } from "../../screens";
import Header from "../HomeScreen/Header";
import HomeHeader from "../HomeScreen/HomeHeader";

const Stack = createStackNavigator();
const TopTab = createMaterialTopTabNavigator();

function HomeTabs() {
  return (
    <TopTab.Navigator tabBar={(props) => <Header {...props} />}>
      <TopTab.Screen name="Learn" component={LearnScreen} />
      <TopTab.Screen name="Earn" component={EarnScreen} />
      <TopTab.Screen name="Connect" component={ConnectScreen} />
      <TopTab.Screen name="Notification" component={NotificationScreen} />
    </TopTab.Navigator>
  );
}

export const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Landing" component={HomeTabs} options={{ headerShown: false }} />
  </Stack.Navigator>
);
