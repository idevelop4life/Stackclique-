import { createDrawerNavigator } from "@react-navigation/drawer";
import { HomeStack } from "./MainStack";

const Drawer = createDrawerNavigator();

export function MainDrawer() {
  return (
    <Drawer.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
      <Drawer.Screen name="Home" component={HomeStack} />
    </Drawer.Navigator>
  );
}
