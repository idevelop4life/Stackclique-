import React from "react";
import { View, Text } from "react-native";
import WelcomeMessage from "../../components/HomeScreen/WelcomeMessage";

export default function LearnScreen() {
  return (
    <View style={{ paddingHorizontal: 4 }}>
      <WelcomeMessage />
    </View>
  );
}
