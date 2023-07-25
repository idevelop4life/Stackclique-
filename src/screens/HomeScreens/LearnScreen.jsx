import React from "react";
import { View } from "react-native";
import EnrolledCourses from "../../components/Learn/EnrolledCourses";
import WelcomeMessage from "../../components/Learn/WelcomeMessage";
import AvailableCourseCard from "../../components/Learn/AvailableCourseCard";

export default function LearnScreen() {
  return (
    <View style={{ paddingHorizontal: 4 }}>
      <WelcomeMessage />
      <EnrolledCourses />
      <AvailableCourseCard />
    </View>
  );
}
