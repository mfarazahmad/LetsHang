import React, { Component } from "react";
import { Button, View, Text, TextInput } from "react-native";
import ContinueButton from "./ContinueButton";
import { CreateAboutMe } from "./StyleSheet/AboutMeStyle";
import * as Progress from "react-native-progress";

export class AboutUser extends Component {
  constructor(props) {
    super(props);
    this.navigatToInterests = this.navigatToInterests.bind(this);
    this.checkEntry = this.checkEntry.bind(this);
    this.state = {
      value: "",
    };
  }

  navigatToInterests = ({ navigation }) => {
    let checkDescription = this.state.value;
    if (checkDescription === "") {
      alert("Please tell people about yourself");
    } else {
      this.props.navigation.navigate("Interests");
    }
  };

  checkEntry = (Description, value) => {
    this.setState({ value: value });
    console.log(this.state.value);
  };

  render() {
    return (
      <View style={CreateAboutMe.overAllContainer}>
        <Progress.Bar
          progress={0.7667}
          width={300}
          color={"red"}
          style={CreateAboutMe.progressbar}
        />
        <View style={CreateAboutMe.container}>
          <Text style={CreateAboutMe.title}>I want people to know....</Text>
          <TextInput
            autoFocus={true}
            placeholder="What I want people to know"
            maxLength={120}
            multiline
            style={CreateAboutMe.inputs}
            value={this.state.value}
            onChangeText={(value) => this.checkEntry("Description", value)}
          />
          <View style={CreateAboutMe.subcontainer}>
            <ContinueButton
              text="Continue"
              color="#ff304f"
              style={CreateAboutMe.centerButton}
              onPress={this.navigatToInterests}
            />
          </View>
        </View>
      </View>
    );
  }
}
export default AboutUser;
