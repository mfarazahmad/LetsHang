import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { YellowBox } from "react-native";
import Navigator from "./FrontEnd/Routes/Routes";
import Interests from "./FrontEnd/Components/ProfilePage/InterestsProfile";
import AgeVerification from "./FrontEnd/Components/ProfilePage/DateVerification";
import DateOfBirth from "./FrontEnd/Components/ProfilePage/AgeVerification";

export default function App() {
  return <Navigator />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
