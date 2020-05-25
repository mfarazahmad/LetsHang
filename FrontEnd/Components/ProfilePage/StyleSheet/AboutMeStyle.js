import { StyleSheet } from "react-native";

const CreateAboutMe = StyleSheet.create({
  overAllContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    marginBottom: 300,
    marginTop: 100,
  },
  progressbar: {
    justifyContent: "center",
    marginLeft: 30,
    marginTop: 40,
  },
  title: {
    fontSize: 27,
    fontWeight: "900",
  },
  inputs: {
    marginTop: 70,
    borderColor: "black",
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderRadius: 10,
    height: 90,
    width: 300,
    fontSize: 15,
    paddingLeft: 5,
    paddingRight: 20,
    marginLeft: 13,
  },
  subcontainer: {
    justifyContent: "center",
    marginLeft: 35,
  },
  centerButton: {
    justifyContent: "center",
    marginLeft: 30,
  },
});

export { CreateAboutMe };
