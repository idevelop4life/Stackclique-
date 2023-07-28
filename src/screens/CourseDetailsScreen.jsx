import { StyleSheet, Text, View } from "react-native";
import React from "react";
import BottomTab from "../components/Learn/BottomTab";
import { Button } from "../components";
import CourseOverview from "../components/course-details/CourseOverview";
import { UIStore } from "../store/store";
import AvailableCourseCard from "../components/Learn/AvailableCourseCard";

export default function CourseDetailsScreen() {
  const showModules = UIStore.useState((state) => state.showModules);
  return (
    <View style={{ flex: 1, paddingHorizontal: 10.08 }}>
      <CourseOverview />

      {showModules ? (
        <AvailableCourseCard moduleNumber showCheckIcon />
      ) : (
        <View>
          <Text>Reviews screen</Text>
        </View>
      )}
      <BottomTab>
        <View style={{ width: 250 }}>
          <Button>Enroll</Button>
        </View>
      </BottomTab>
    </View>
  );
}

const styles = StyleSheet.create({});
