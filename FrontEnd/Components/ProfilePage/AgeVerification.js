import React, { Component } from "react";
import { Button, StyleSheet, View, Text } from "react-native";
import DateVerification from "./DateVerification";
import * as Progress from "react-native-progress";
import ContinueButton from "./ContinueButton";
import { createAgeStyle } from "./StyleSheet/AgeStyle";

export class DateOfBirth extends Component {
  constructor(props) {
    super(props);
    this.navigatetoInterest = this.navigatetoInterest.bind(this);
  }
  navigatetoInterest = () => {
    this.props.navigation.navigate("Interests");
  };

  render() {
    return (
      <View style={createAgeStyle.container}>
        <View style={createAgeStyle.progressbar}>
          <Progress.Bar progress={0.433} width={300} color={"red"} />
        </View>
        <View>
          <View>
            <Text style={createAgeStyle.title}>My brithday is....</Text>
          </View>
          <View style={createAgeStyle.age}>
            <DateVerification />
          </View>
        </View>
        <View style={createAgeStyle.button}>
          <ContinueButton
            text="Continue"
            color="#ff304f"
            onPress={this.navigatetoInterest}
          />
        </View>
      </View>
    );
  }
}

export default DateOfBirth;
