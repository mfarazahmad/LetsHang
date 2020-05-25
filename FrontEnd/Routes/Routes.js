import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { NavigationContainer } from "@react-navigation/native";
import LoginPage from "../Components/LoginPage/LoginPage";
import AboutUser from "../Components/ProfilePage/AboutMe";
import CreateProfile from "../Components/ProfilePage/CreateProfile";
import Interests from "../Components/ProfilePage/InterestsProfile";
import DateOfBirth from "../Components/ProfilePage/AgeVerification";

const screens = {
  LoginPage: {
    screen: LoginPage,
  },
  CreateProfile: {
    screen: CreateProfile,
  },
  DateOfBirth: {
    screen: DateOfBirth,
  },

  Interests: {
    screen: Interests,
  },
  AboutUser: {
    screen: AboutUser,
  },
};

const Routes = createStackNavigator(screens);

export default createAppContainer(Routes);
