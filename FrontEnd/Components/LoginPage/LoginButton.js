import React, { Component } from "react";
import { Button, StyleSheet, View, Text, TouchableOpacity } from "react-native";

const LoginButton = (props) => {
  const content = (
    <View style={[styles.loginButton, { backgroundColor: props.color }]}>
      <Text style={styles.text}>{props.text}</Text>
    </View>
  );
  return <TouchableOpacity onPress={props.onPress}>{content}</TouchableOpacity>;
};

const styles = StyleSheet.create({
  loginButton: {
    padding: 16,
    width: 250,
    borderRadius: 24,
    alignItems: "center",
    marginTop: 10,
    shadowOpacity: 0.5,
  },
  text: {
    color: "white",
    fontSize: 15,
  },

  bottom: {
    marginTop: 100,
  },
});

export default LoginButton;
