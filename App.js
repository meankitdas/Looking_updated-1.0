import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import LoginScreen from "./app/screens/LoginScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import MainScreen from "./app/screens/MainScreen";
import DownScreen from "./app/components/DownScreen";
import Item from "./app/components/Item";
import AuthScreen from "./app/screens/AuthScreen";
import AuthNavigator from "./app/navigation/AuthNavigator";
import LoadingScreen from "./app/screens/LoadingScreen";
import MultipleInput from "./app/components/MultipleInput";


import { createSwitchNavigator, createAppContainer } from "react-navigation";
import { NavigationContainer } from "@react-navigation/native";

import ProfileScreen from "./app/screens/ProfileScreen";


import Loader from "./app/components/Loader";



export default function App() {
  const AppSwitchNavigator = createSwitchNavigator({
    LoadingScreen: LoadingScreen,
    AuthScreen: AuthScreen,
    MainScreen: MainScreen,
    ProfileScreen: ProfileScreen,
  });

  const AppNavigator = createAppContainer(AppSwitchNavigator);

  // return <AppNavigator />;
 

 
  

  return <ProfileScreen />;
  
  

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
});
