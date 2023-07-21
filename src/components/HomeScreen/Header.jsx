import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { theme } from "../theme/theme";
import Avatar from "../UI/Avatar";
import { Ionicons } from "@expo/vector-icons";

export default function Header() {
  const navigation = useNavigation();
  console.log(navigation.getState());
  const route = useRoute();
  console.log(route);
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity style={{ flex: 1 }}>
        <Avatar />
      </TouchableOpacity>
      <Text style={{ flex: 1, fontWeight: 700, color: theme.grey }}>LEARN</Text>
      <Text style={{ flex: 1, fontWeight: 700, color: theme.grey }}>EARN</Text>
      <Text style={{ flex: 1, fontWeight: 700, color: theme.grey }}>CONNECT</Text>
      <TouchableOpacity style={{ flex: 1 }}>
        <Ionicons name="notifications-outline" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 4,
    fontWeight: 700,
  },
});
