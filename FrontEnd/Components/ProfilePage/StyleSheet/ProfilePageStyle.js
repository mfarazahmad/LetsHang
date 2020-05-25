import { StyleSheet } from "react-native";

const CreateProfileStyle = StyleSheet.create({
  overAllContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    marginBottom: 300,
    marginTop: 100,
  },

  title: {
    fontSize: 35,
    fontWeight: "900",
  },
  subContainer: {
    justifyContent: "center",
    marginLeft: 30,
  },
  subtext: {
    fontSize: 15,
    width: 200,
    fontWeight: "900",
    marginTop: 20,
  },
  inputs: {
    marginTop: 70,
    borderColor: "black",
    borderBottomWidth: 2,
    height: 40,
    width: 170,
    fontSize: 15,
    paddingLeft: 5,
    paddingRight: 20,
  },
});

export { CreateProfileStyle };
