import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { TailwindProvider } from "tailwindcss-react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { theme } from "./src/components/theme/theme";
import { DrawerStack } from "./src/components/navigation/DrawerStack";
import { AuthStack } from "./src/components/navigation/AuthStack";
import OnboardingScreen from "./src/screens/OnboardingScreen";
import { UIStore } from "./src/store/store";

export default function App() {
  const [isFirstLaunch, setFirstLaunch] = useState(true);
  const isAuthenticated = UIStore.useState((state) => state.isAuthenticated);

  useEffect(() => {
    checkIfFirstLaunch();
  }, []);

  const checkIfFirstLaunch = async () => {
    try {
      const value = await AsyncStorage.getItem("alreadyLaunched");
      if (value === null) {
        // If it's the first launch, set alreadyLaunched to true
        await AsyncStorage.setItem("alreadyLaunched", "true");
      } else {
        // If not the first launch, set isFirstLaunch to false
        setFirstLaunch(true);
      }
    } catch (error) {
      console.error("Error reading from AsyncStorage:", error);
    }
  };

  const handleOnboardingFinish = () => {
    // Called when onboarding is finished, set isFirstLaunch to false
    setFirstLaunch(false);
  };
  const handleSkip = () => {
    setFirstLaunch(false); // Mark onboarding as finished
  };

  if (isFirstLaunch) {
    return (
      <NavigationContainer>
        <OnboardingScreen onFinish={handleOnboardingFinish} onSkip={handleSkip} />
      </NavigationContainer>
    );
  }

  return (
    <TailwindProvider>
      <StatusBar style="auto" />
      <NavigationContainer>
        {isAuthenticated ? <DrawerStack /> : <AuthStack />}
      </NavigationContainer>
    </TailwindProvider>
  );
}
