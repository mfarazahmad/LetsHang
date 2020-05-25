import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const LoginPageStyle = StyleSheet.create({
  outerContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "#f5eded",
    fontSize: 60,
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "500",
  },
  subtitle: {
    color: "#f5eded",
    fontSize: 25,
    fontWeight: "500",
  },

  bottom: {
    marginTop: 430,
  },

  backgroundVideo: {
    height: height,
    position: "absolute",
    top: 0,
    left: 0,
    alignItems: "stretch",
    bottom: 0,
    right: 0,
  },
});

export { LoginPageStyle };
