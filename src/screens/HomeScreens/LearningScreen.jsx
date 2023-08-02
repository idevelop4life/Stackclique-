import { Pressable, StyleSheet, Text, TouchableOpacity, View, ScrollView } from "react-native";
import React, { useState } from "react";
import BottomTab from "../../components/Learn/BottomTab";
import { Button } from "../../components";
import { AntDesign } from "@expo/vector-icons";
import { theme } from "../../components/theme/theme";
import VideoPlayer from "../../components/UI/VideoPlayer";

export default function LearningScreen() {
  const [buttonDisabled, setButtonDisabled] = useState(true);
  return (
    <View style={{ flex: 1, paddingHorizontal: 10.08 }}>
      <Text>LearningScreen</Text>
      <VideoPlayer />

      <Text style={{ marginTop: 25, fontWeight: 700, fontSize: 16 }}>
        Introduction to VS Code practices
      </Text>
      <ScrollView style={{ paddingBottom: 100 }}>
        <Text style={{ fontSize: 16 }}>
          In this course we will study the initial stages of becoming a UI/UX Designer, I have
          several steps that I often do when I want to make a Website Design or App Design In In
          this course we will study the initial stages of becoming a UI/UX Designer, I have several
          steps that I often do when I want to make a Website Design or App Design In this course we
          will study the initial stages of becoming a UI/UX Designer, I have several steps that I
          often do when I want to make a Website Design or App Design In this course we will study
          the initial stages of becoming a UI/UX Designer, I have several steps that I often do when
          I want to make a Website Design or App Design In this course we will study the initial
          stages of becoming a UI/UX Designer, I have several steps that I often do when I want to
          make a Website Design or App Design this course we will study the initial stages of
          becoming a UI/UX Designer, I have several steps that I often do when I want to make a
          Website Design or App Design is course we will study the initial stages of becoming a
          UI/UX Designer, I have several steps that I often do when I want to make a Website Design
          or App Design In this course we will study the initial stages of becoming a UI/UX
          Designer, I have several steps that I often do when I want to make a Website Design or App
          Design. Anderson
        </Text>
      </ScrollView>
      <BottomTab>
        <View style={{ flexDirection: "row", justifyContent: "space-around", width: "100%" }}>
          <TouchableOpacity
            style={[
              styles.arrowButtons,
              { backgroundColor: buttonDisabled ? theme.colors.grey : theme.colors.primaryColor },
            ]}
            disabled={buttonDisabled}
          >
            <AntDesign name="left" size={24} color={theme.colors.white} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.arrowButtons}>
            <AntDesign name="right" size={24} color={theme.colors.white} />
          </TouchableOpacity>
        </View>
      </BottomTab>
    </View>
  );
}

const styles = StyleSheet.create({
  arrowButtons: {
    backgroundColor: theme.colors.primaryColor,
    color: theme.colors.white,
    paddingVertical: 10,
    paddingHorizontal: 30,
    alignItems: "center",
    borderRadius: 23,
  },
});
