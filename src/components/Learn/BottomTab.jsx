import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";

export default function BottomTab() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>BottomTab alright</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
  },
});
