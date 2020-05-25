import React, { Component } from "react";
import { Button, StyleSheet, View, Text, TouchableOpacity } from "react-native";

const ContinueButton = (props) => {
  const content = (
    <View style={[styles.continueButton, { backgroundColor: props.color }]}>
      <Text style={styles.text}>{props.text}</Text>
    </View>
  );
  return <TouchableOpacity onPress={props.onPress}>{content}</TouchableOpacity>;
};

const styles = StyleSheet.create({
  continueButton: {
    padding: 16,
    width: 250,
    borderRadius: 24,
    alignItems: "center",
    shadowOpacity: 0.5,
    marginTop: 50,
  },
  text: {
    color: "#fafaf6",
    fontSize: 20,
    fontWeight: "bold",
  },

  bottom: {
    marginTop: 100,
  },
});

export default ContinueButton;
