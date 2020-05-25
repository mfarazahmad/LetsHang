import React, { Component } from "react";
import { Button, StyleSheet, View, Text } from "react-native";
import LoginButton from "./LoginButton";
import { LoginPageStyle } from "./StyleSheet/LoginPageStyle";
import { Video } from "expo-av";

export class LoginPage extends Component {
  super(props) {
    this.alertUser = this.alertUser.bind(this);
    this.connectViaFacebook = this.connectViaFacebook.bind(this);
    this.connectViaPhoneNumber = this.connectViaPhoneNumber.bind(this);
  }

  connectViaFacebook = ({ navigation }) => {
    this.props.navigation.navigate("CreateProfile");
  };

  connectViaPhoneNumber = ({ navigation }) => {
    this.props.navigation.navigate("CreateProfile");
  };

  render() {
    return (
      <View style={LoginPageStyle.outerContainer}>
        <Video
          source={require("../../Graphics/LoginVideo.mp4")}
          style={LoginPageStyle.backgroundVideo}
          muted={true}
          repeat={true}
          resizeMode={"cover"}
          rate={1.0}
          ignoreSilentSwitch={"obey"}
          shouldPlay={true}
          isLooping={true}
        />
        <Text style={LoginPageStyle.title}>Let's Hang</Text>
        <Text style={LoginPageStyle.subtitle}>
          Where people go on adventures
        </Text>
        <View style={LoginPageStyle.bottom}>
          <LoginButton
            text="Connect with Phone Number"
            onPress={this.connectViaPhoneNumber}
            color="#d10047"
          />

          <LoginButton
            text="Connect with Facebook"
            onPress={this.connectViaFacebook}
            color="#3B5998"
          />
        </View>
      </View>
    );
  }
}

export default LoginPage;
