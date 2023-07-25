import { StyleSheet, Text, View, useWindowDimensions } from "react-native";
import React from "react";

export default function CustomText() {
  const { fontScale } = useWindowDimensions();
  return (
    <View>
      <Text>CustomText</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
