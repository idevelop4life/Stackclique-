import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { SearchScreen} from "../../screens";
import { CustomHeader } from "..";
import MainTab from './MainTab';


export default function MainStack() {

  const HomeStack = createNativeStackNavigator();
  const myConfig = {
    presentation: 'modal',
    animationEnabled: true,
    gestureEnabled: true, //Defaults to true on iOS, false on Android.
    animationTypeForReplace: 'push', //The type of animation to use when this screen replaces another screen
    keyboardHandlingEnabled: true, //the keyboard will NOT automatically dismiss when navigating to a new screen from this screen. Defaults to true.
    //custom header
    // header: ({ navigation, route, options, back }) => (
    //   <CustomHeader title={route.name} />
    // ),
    // cardStyle: { backgroundColor: 'red' },
  };

  return (
    <HomeStack.Navigator screenOptions={myConfig}>
      <HomeStack.Screen name="Landing" component={MainTab} options={{ headerShown: false }} />
      <HomeStack.Group screenOptions={{headerShown: false}}>
      <HomeStack.Screen
        name="Search"
        component={SearchScreen}
        options={{
          headerTitle: (props) => <CustomHeader {...props} />,
          headerLeft: () => null,
        }}
      />
      </HomeStack.Group>
    </HomeStack.Navigator>
  )
}
