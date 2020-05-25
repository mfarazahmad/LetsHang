import React, { Component } from "react";
import { Button, StyleSheet, View, Text } from "react-native";
import InterestButton from "./InterestsButton";
import { createInterestStyle } from "./StyleSheet/InterestsStyle";
import * as Progress from "react-native-progress";
import ContinueButton from "./ContinueButton";

export class Interests extends Component {
  constructor(props) {
    super(props);
    this.changeColor = this.changeColor.bind(this);
    this.navigatetoAboutMe = this.navigatetoAboutMe.bind(this);

    this.state = {
      AllInterests: [
        { key: 1, interest: "Reading", color: "#3B5998" },
        { key: 2, interest: "Music", color: "#3B5998" },
        { key: 3, interest: "Food", color: "#3B5998" },
        { key: 4, interest: "Travel", color: "#3B5998" },
        { key: 5, interest: "Video Games", color: "#3B5998" },
        { key: 6, interest: "Sports", color: "#3B5998" },
        { key: 7, interest: "Movies", color: "#3B5998" },
        { key: 8, interest: "Hunting", color: "#3B5998" },
        { key: 9, interest: "Fishing", color: "#3B5998" },
        { key: 9, interest: "Arts & Crafts", color: "#3B5998" },
        { key: 10, interest: "Cars", color: "#3B5998" },
        { key: 11, interest: "Camping", color: "#3B5998" },
        { key: 12, interest: "Hiking", color: "#3B5998" },
        { key: 13, interest: "Cooking", color: "#3B5998" },
        { key: 14, interest: "Swimming", color: "#3B5998" },
      ],
    };
  }

  changeColor = (item) => {
    let AllInterests = this.state.AllInterests;
    let length = AllInterests.length;
    let targetInterest = item["interest"];

    for (let i = 0; i < length; i++) {
      let SpecifcInterest = AllInterests[i]["interest"];
      if (SpecifcInterest === targetInterest) {
        let specificColor = AllInterests[i];
        let newAllInterests = this.state.AllInterests.slice();
        if (newAllInterests[i]["color"] === "red") {
          newAllInterests[i]["color"] = "#3B5998";
          this.setState({ AllInterests: newAllInterests });
        } else {
          newAllInterests[i]["color"] = "red";
          this.setState({ AllInterests: newAllInterests });
        }
      }
    }
  };

  navigatetoAboutMe = () => {
    let AllInterests = this.state.AllInterests;
    let length = AllInterests.length;
    let count = 0;

    for (let i = 0; i < length; i++) {
      let checkColor = AllInterests[i]["color"];
      if (checkColor === "red") {
        count++;
      }
    }
    if (count < 5) {
      alert("Please select 5 interests");
    } else {
      this.props.navigation.navigate("AboutUser");
    }
  };

  render() {
    return (
      <View>
        <View style={createInterestStyle.progress}>
          <Progress.Bar progress={0.6} width={300} color={"red"} />
        </View>
        <Text style={createInterestStyle.title}>
          What I like to do in my spare time.....
        </Text>
        <View style={createInterestStyle.buttons}>
          {this.state.AllInterests.map((item) => (
            <View>
              <InterestButton
                text={item.interest}
                color={item.color}
                onPress={() => this.changeColor(item)}
                value="hi"
              />
            </View>
          ))}
        </View>
        <View style={createInterestStyle.continueButton}>
          <ContinueButton
            text="Continue"
            color="#ff304f"
            onPress={this.navigatetoAboutMe}
          />
        </View>
      </View>
    );
  }
}

export default Interests;
