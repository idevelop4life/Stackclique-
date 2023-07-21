import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import { HomeScreen } from "../../screens";

const Stack = createStackNavigator();
const TopTab = createMaterialTopTabNavigator();

function HomeTabs() {
  return (
    <TopTab.Navigator>
      <TopTab.Screen name="Landing" component={HomeStack} />
    </TopTab.Navigator>
  );
}

export const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeTabs} />
  </Stack.Navigator>
);
