import { StyleSheet, Text, View, useWindowDimensions, ImageBackground } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { theme } from "../theme/theme";
import { Avatar, Button } from "../../components";
export default function AvailableCourseCard() {
  const { width } = useWindowDimensions();
  const navigation = useNavigation();
  return (
    <View style={[styles.container, { width: 0.9 * width }]}>
      <ImageBackground
        source={require("../../../assets/images-from-figma/girl-img.jpg")}
        resizeMode="cover"
        style={styles.image}
      />

      <View style={styles.itemsContainer}>
        <View style={styles.avatarPosition}>
          <View>
            <Avatar
              uri={require("../../../assets/images-from-figma/vs-code-img.png")}
              size={81.544}
              borderColor={theme.colors.white}
              borderRadius={17.47408}
            />
          </View>
        </View>
        <Text
          style={{
            textTransform: "uppercase",
            textAlign: "center",
            fontWeight: 700,
            fontSize: 20,
            marginBottom: 5,
          }}
        >
          WEB DEVELOPMENT FRONT END
        </Text>
        <Text style={{ textAlign: "center", lineHeight: 16 }}>
          Visual Studio Code is a code editor redefined and optimized for building and debugging
          modern web and cloud applications. Visual Studio Code is free and ...
        </Text>
        <Text style={{ textAlign: "center", color: theme.colors.green, marginTop: 10 }}>
          Requirement: Level 3 and above
        </Text>
        <View style={{ marginVertical: 14.08 }}>
          <Button onPress={() => navigation.navigate("Course-Details")}>Learn More</Button>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    alignSelf: "center",

    minHeight: 371,
    borderRadius: 15.29008,
    overflow: "hidden",
    marginTop: 28,
  },
  image: {
    flex: 1,
    borderRadius: 15.29008,
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },
  itemsContainer: {
    position: "relative",
    backgroundColor: theme.colors.white,
    borderTopRightRadius: 30.57904,
    borderTopLeftRadius: 30.57904,
    marginTop: "auto",
    paddingHorizontal: 30.08,
  },
  avatarPosition: {
    top: -30,
    width: "100%",
    justifyContent: "center",
    flexDirection: "row",
  },
});
