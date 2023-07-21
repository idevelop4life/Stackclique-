import { createDrawerNavigator } from "@react-navigation/drawer";
import { HomeStack } from "./HomeStack";

const Drawer = createDrawerNavigator();

export function DrawerStack() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeStack} />
    </Drawer.Navigator>
  );
}
