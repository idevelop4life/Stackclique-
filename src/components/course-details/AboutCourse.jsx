import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { theme } from "../theme/theme";
import { EvilIcons } from "@expo/vector-icons";

export default function AboutCourse() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={{ fontWeight: 600 }}>About Course</Text>

      <View style={[styles.details]}>
        {!isExpanded ? (
          <Text numberOfLines={4} style={styles.text}>
            In this course we will study the initial stages of becoming a UI/UX Designer, I have
            several steps that I often do when I want to make a Website Design or App Design Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Dolorem voluptas asperiores similique
            nobis quis dicta aspernatur alias ipsa vel magni repudiandae cum unde modi, quam,
            sapiente incidunt praesentium voluptatibus accusamus?
          </Text>
        ) : (
          <Text style={styles.text}>
            In this course we will study the initial stages of becoming a UI/UX Designer, I have
            several steps that I often do when I want to make a Website Design or App Design Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Dolorem voluptas asperiores similique
            nobis quis dicta aspernatur alias ipsa vel magni repudiandae cum unde modi, quam,
            sapiente incidunt praesentium voluptatibus accusamus?
          </Text>
        )}
      </View>
      <Pressable onPress={() => setIsExpanded((prev) => !prev)}>
        {isExpanded ? (
          <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
            <Text style={styles.readMore}>Read Less</Text>
            <EvilIcons name="chevron-up" color={theme.colors.green} size={20} />
          </View>
        ) : (
          <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
            <Text style={styles.readMore}>Read More</Text>
            <EvilIcons name="chevron-down" color={theme.colors.green} size={20} />
          </View>
        )}
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    position: "relative",
  },
  details: {
    marginTop: 10,
    position: "relative",
  },

  text: {
    fontSize: 17,
    color: theme.colors.grey,
    lineHeight: 23,
  },
  readMore: {
    color: theme.colors.green,
  },
});
// #242424, #24242400
// rgba(36, 36, 36, 1), rgba(36, 36, 36, 0)
