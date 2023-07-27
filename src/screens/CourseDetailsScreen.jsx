import { StyleSheet, Text, View } from "react-native";
import React from "react";
import BottomTab from "../components/Learn/BottomTab";
import { Button } from "../components";
import CourseOverview from "../components/course-details/CourseOverview";

export default function CourseDetailsScreen() {
  return (
    <View style={{ flex: 1, paddingHorizontal: 10.08 }}>
      <CourseOverview />
      <BottomTab>
        <View style={{ width: 250 }}>
          <Button>Enroll</Button>
        </View>
      </BottomTab>
    </View>
  );
}

const styles = StyleSheet.create({});
