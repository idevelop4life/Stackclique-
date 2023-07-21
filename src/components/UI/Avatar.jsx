import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { theme } from "../theme/theme";
export default function Avatar({ uri }) {
  return (
    <View>
      <Image style={styles.image} source={require("../../../assets/avatar-img.jpg")} />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    borderColor: theme.primaryColor,
    height: 38,
    width: 38,
    borderWidth: 2,
    borderColor: theme.primaryColor,
    borderRadius: 50,
  },
});
