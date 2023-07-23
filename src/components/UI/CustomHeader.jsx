import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { theme } from "../theme/theme";
export default function CustomHeader({ children }) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={theme.touchOpacity.veryLight}
        style={{ position: "absolute", left: 0 }}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="chevron-back-outline" size={24} color={theme.colors.grey} />
      </TouchableOpacity>
      <Text style={styles.headerText}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    flexDirection: "row",
    minWidth: "100%",

    alignItems: "center",
    justifyContent: "center",

    padding: 8,
  },
  headerText: {
    textTransform: "uppercase",
    fontWeight: 700,
  },
});
