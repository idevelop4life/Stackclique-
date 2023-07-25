import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";
import { theme } from "../theme/theme";

export default function BottomTab() {
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          height: 40,
          backgroundColor: theme.colors.white,
          width: "100%",
        }}
      >
        <Text style={{ textAlign: "center", color: theme.colors.grey }}>
          How to level up on Stack Clique?
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",

    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
  },
});
