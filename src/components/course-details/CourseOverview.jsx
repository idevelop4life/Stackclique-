import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import CourseStats from "./CourseStats";
import { theme } from "../theme/theme";
import AboutCourse from "./AboutCourse";
export default function CourseOverview() {
  const [showModules, setShowModules] = useState(true);
  return (
    <View style={styles.container}>
      <CourseStats />
      <AboutCourse showModlues={showModules} setShowModules={setShowModules} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
    marginTop: 12,
    paddingVertical: 12,
    paddingHorizontal: 6,
    borderRadius: 10,
  },
});
