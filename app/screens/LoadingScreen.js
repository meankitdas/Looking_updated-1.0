import React, { Component } from "react";
import { View, StyleSheet, AsyncStorage } from "react-native";
import LottieView from "lottie-react-native";

// import firebase from "firebase";
import auth from "@react-native-firebase/auth";

export default class LoadingScreen extends Component {
  componentDidMount() {
    this.isValid();
    this.checkIfLoggedIn();
  }

  isValid = async () => {
    const value = await AsyncStorage.getItem("isValid");
    console.log(value);
    return value;
  };

  checkIfLoggedIn = () => {
    auth().onAuthStateChanged((user) => {
      if (user) {
        this.props.navigation.navigate("MainScreen");
      } else {
        this.props.navigation.navigate("AuthScreen");
      }
    });
  };

  // else if (user && this.isValid === "null") {
  //   this.props.navigation.navigate("ProfileScreen");
  // } 
  render() {
    return (
      <View style={styles.container}>
        <LottieView
          autoPlay
          loop={true}
          source={require("../assets/loader.json")}
          style={styles.animation}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  animation: {
    width: 150,
  },
});
