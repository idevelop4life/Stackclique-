import { createNativeStackNavigator } from "@react-navigation/stack";
import { LoginScreen, OnboardingScreen, SignUpScreen } from "../../screens";
const Root = createNativeStackNavigator();

export default function RootStack({navigation}) {
  return (
    <Root.Navigator screenOptions={{ headerShown: false , animationTypeForReplace: 'pop'}}>
      <Root.Screen name="Onboarding" component={OnboardingScreen} options={{ headerShown: false }}/>
      <Root.Screen name="login" component={LoginScreen} />
      <Root.Screen name="SignUp" component={SignUpScreen} />
    </Root.Navigator>
  );
};
