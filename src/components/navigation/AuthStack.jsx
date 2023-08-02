import { LoginScreen, SignUpScreen } from "../../screens";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

export const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName="LogIn" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="LogIn" component={LoginScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="Home" component={SignUpScreen} />
    </Stack.Navigator>
  );
};