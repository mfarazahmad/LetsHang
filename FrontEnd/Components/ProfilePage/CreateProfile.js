import React, { Component } from "react";
import { Button, View, Text, TextInput } from "react-native";
import { CreateProfileStyle } from "./StyleSheet/ProfilePageStyle";
import ContinueButton from "./ContinueButton";
import * as Progress from "react-native-progress";

export class CreateProfile extends Component {
  constructor(props) {
    super(props);
    this.navigateToAge = this.navigateToAge.bind(this);
    this.checkEntry = this.checkEntry.bind(this);
    this.state = {
      value: "",
    };
  }

  checkEntry = (Firstname, value) => {
    this.setState({ value: value });
    console.log(this.state.value);
  };

  navigateToAge = ({ navigation }) => {
    let checkName = this.state.value;
    if (checkName === "") {
      alert("Please enter your name");
    } else {
      this.props.navigation.navigate("DateOfBirth");
    }
  };

  render() {
    return (
      <View style={CreateProfileStyle.overAllContainer}>
        <Progress.Bar progress={0.167} width={300} color={"red"} />

        <View style={CreateProfileStyle.container}>
          <Text style={CreateProfileStyle.title}>My first name is</Text>
          <View style={CreateProfileStyle.subContainer}>
            <TextInput
              autoFocus={true}
              placeholder="First name"
              maxLength={80}
              style={CreateProfileStyle.inputs}
              value={this.state.value}
              onChangeText={(value) => this.checkEntry("Firstname", value)}
            />
            <Text style={CreateProfileStyle.subtext}>
              This is how it will appear in Let's Hang.
            </Text>
          </View>
          <ContinueButton
            text="Continue"
            color="#ff304f"
            onPress={this.navigateToAge}
          />
        </View>
      </View>
    );
  }
}

export default CreateProfile;
