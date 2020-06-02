import React, { Component } from "react";
import { Button, View, Text, Image } from "react-native";
import { CardStyles } from "./StyleSheet/CardsStyle";

export class Cards extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activity: [
        {
          activityGroup: "Food",
          image: "",
          title: "Giovanni's Italian Restaurant",
          GroupSize: "5",
          ages: "21 - 30",
          gender: "Any",
          description: "I am looking to meet new people",
          location: "5 miles away",
        },
      ],
    };
  }

  render() {
    return (
      <View style={CardStyles.Cards}>
        <View>
          {this.state.activity.map((item) => (
            <View>
              <View>
                <View>
                  <Text style={CardStyles.title}>{item.title}</Text>
                </View>
                <View>
                  {" "}
                  <Image
                    style={CardStyles.image}
                    source={require("../../Graphics/food.jpg")}
                  />
                </View>
                <View>
                  <Text>{item.location}</Text>
                </View>
                <View>
                  <Text>Age restriction: {item.ages}</Text>
                </View>
                <View>
                  <Text>{item.description}</Text>
                </View>
              </View>
            </View>
          ))}
        </View>
      </View>
    );
  }
}
export default Cards;
