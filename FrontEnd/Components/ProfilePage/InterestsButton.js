import React, { Component } from "react";
import { Button, StyleSheet, View, Text, TouchableOpacity } from "react-native";

const InterestButton = (props) => {
  const content = (
    <View style={styles.row}>
      <View style={[styles.interestButton, { backgroundColor: props.color }]}>
        <Text style={styles.text}>{props.text}</Text>
      </View>
    </View>
  );
  return <TouchableOpacity onPress={props.onPress}>{content}</TouchableOpacity>;
};

const styles = StyleSheet.create({
  interestButton: {
    padding: 16,
    width: 120,
    borderRadius: 24,
    alignItems: "center",
    shadowOpacity: 0.5,
    marginTop: 10,
    marginRight: 10,
    marginLeft: 7,
  },
  text: {
    color: "#fafaf6",
    fontSize: 12,
    fontWeight: "bold",
  },
});

export default InterestButton;
