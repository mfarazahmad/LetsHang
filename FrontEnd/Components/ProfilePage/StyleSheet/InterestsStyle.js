import { StyleSheet } from "react-native";

const createInterestStyle = StyleSheet.create({
  progress: {
    marginTop: 80,
    marginLeft: 60,
  },
  title: {
    fontSize: 30,
    fontWeight: "900",
    marginTop: 100,
    marginLeft: 40,
  },
  buttons: {
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 50,
  },
  continueButton: {
    marginTop: 20,
    marginLeft: 70,
  },
});

export { createInterestStyle };
