import React, { useEffect, useState, useLayoutEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { createNativeStackNavigator, TransitionPresets } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import {
  HomeScreen,
  LoginScreen,
  OnboardingScreen,
  SignUpScreen,
  SplashScreen,
} from "./src/screens";
import { TailwindProvider } from "tailwindcss-react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Header from "./src/components/HomeScreen/Header";
import { theme } from "./src/components/theme/theme";
import { DrawerStack } from "./src/components/navigation/DrawerStack";
import { AuthStack } from "./src/components/navigation/AuthStack";
import { UIStore } from "./src/store/store";

export default function App() {
  const [isFirstLaunch, setFirstLaunch] = useState(true);
  const isAuthenticated = UIStore.useState((state) => state.isAuthenticated);

  useEffect(() => {
    AsyncStorage.getItem("alreadyLaunched").then((value) => {
      if (value === null) {
        AsyncStorage.setItem("alreadyLaunched", "true");
        setFirstLaunch(false);
      } else {
        setFirstLaunch(true);
      }
    });
  }, []);

  if (isFirstLaunch) {
    return <OnboardingScreen setFirstLaunch={() => setFirstLaunch(false)} />;
  }

  return (
    <TailwindProvider>
      <StatusBar style="auto" backgroundColor={theme.background} />
      <NavigationContainer>{isAuthenticated ? <DrawerStack /> : <AuthStack />}</NavigationContainer>
    </TailwindProvider>
  );
}
