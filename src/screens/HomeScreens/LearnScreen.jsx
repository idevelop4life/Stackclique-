import React from "react";
import { View } from "react-native";
import EnrolledCourses from "../../components/Learn/EnrolledCourses";
import WelcomeMessage from "../../components/Learn/WelcomeMessage";
import AvailableCourseCard from "../../components/Learn/AvailableCourseCard";
import BottomTab from "../../components/Learn/BottomTab";

export default function LearnScreen() {
  return (
    <View style={{ paddingHorizontal: 4, flex: 1 }}>
      <WelcomeMessage />
      <EnrolledCourses />
      <AvailableCourseCard />
      <BottomTab />
    </View>
  );
}
