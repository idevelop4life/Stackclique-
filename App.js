import React, { useEffect, useState, useCallback } from "react";
import { StatusBar } from "expo-status-bar";
import * as SplashScreen from 'expo-splash-screen';
import * as Font from "expo-font"

import { NavigationContainer } from "@react-navigation/native";
import { OnboardingScreen } from "./src/screens";
import { TailwindProvider } from "tailwindcss-react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
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
