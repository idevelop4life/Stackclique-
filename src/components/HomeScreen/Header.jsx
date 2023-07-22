import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { theme } from "../theme/theme";
import Avatar from "../UI/Avatar";
import { Ionicons } from "@expo/vector-icons";

const NotificationNumberIndicator = () => {
  return (
    <View style={styles.notificationIcon}>
      <Text style={{ color: theme.white, flex: 1, justifyContent: "center", marginTop: -2 }}>
        2
      </Text>
    </View>
  );
};

export default function Header({ state, descriptors, navigation, position }) {
  const handleTabNavigationOnPress = (index, name) => {
    isFocused = index == state.index;
    const route = state.routes.find((item) => item.name == name);
    const event = navigation.emit({
      type: "tabPress",
      target: route.key,
      canPreventDefault: true,
    });
    if (!isFocused && !event.defaultPrevented) {
      navigation.navigate({ name: route.name, merge: true });
    }
  };
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity activeOpacity={0.7}>
        <Avatar />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleTabNavigationOnPress(0, "Learn")}>
        <Text
          style={[
            styles.headerItem,
            {
              borderBottomColor: state.index == 0 && theme.primaryColor,
              borderBottomWidth: state.index == 0 ? 2 : 0,
              color: state.index == 0 ? theme.primaryColor : theme.grey,
              paddingBottom: 4,
            },
          ]}
        >
          LEARN
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleTabNavigationOnPress(1, "Earn")}>
        <Text
          style={[
            styles.headerItem,
            {
              borderBottomColor: state.index == 1 && theme.primaryColor,
              borderBottomWidth: state.index == 1 ? 2 : 0,
              color: state.index == 1 ? theme.primaryColor : theme.grey,
              paddingBottom: 4,
            },
          ]}
        >
          EARN
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleTabNavigationOnPress(2, "Connect")}>
        <Text
          style={[
            styles.headerItem,
            {
              borderBottomColor: state.index == 2 && theme.primaryColor,
              borderBottomWidth: state.index == 2 ? 2 : 0,
              color: state.index == 2 ? theme.primaryColor : theme.grey,
              paddingBottom: 4,
            },
          ]}
        >
          CONNECT
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleTabNavigationOnPress(3, "Notification")}>
        <View style={{ position: "relative" }}>
          <Ionicons name="notifications-outline" size={24} color="black" />
          <NotificationNumberIndicator />
        </View>
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
    justifyContent: "space-around",
    backgroundColor: theme.white,
    paddingVertical: 10,
    fontWeight: 700,
    marginTop: 50,
  },
  headerItem: {
    fontWeight: 700,
    fontSize: 15,
    color: theme.grey,
  },
  item1: {
    borderBottomColor: theme.primaryColor,
    borderBottomWidth: 2,
  },
  item2: {
    borderBottomColor: theme.primaryColor,
    borderBottomWidth: 2,
  },
  item3: {
    borderBottomColor: theme.primaryColor,
    borderBottomWidth: 2,
  },
  notificationIcon: {
    height: 15,
    width: 15,
    backgroundColor: theme.primaryColor,
    color: theme.white,
    position: "absolute",
    borderRadius: 50,
    right: 0,
    top: -5,
    alignItems: "center",
  },
});
