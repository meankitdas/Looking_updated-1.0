import React, {useEffect} from "react";
import { View, StyleSheet, StatusBar } from "react-native";
import LottieView from "lottie-react-native";



export default function Loader({navigation}) {
  

  return (
    <>
      <StatusBar hidden translucent backgroundColor="transparent" />
      <View
        style={[styles.container, { backgroundColor: "#fff" }]}
      >
        {/* {theme.mode === "dark" ? (
          <LottieView
            autoPlay
            loop={true}
            style={styles.animations}
            source={require("../assets/animations/DarkLoader.json")}
            speed={1.5}
          />
        ) : (
          <LottieView
            autoPlay
            loop={true}
            style={styles.animations}
            source={require("../assets/animations/LightLoader.json")}
            speed={1.5}
          />
        )}
         */}

         <LottieView
            autoPlay
            loop={true}
            style={styles.animations}
            source={require("../assets/loader.json")}
            speed={1.5}
         />

         
      </View>
    </>
  );
}


const styles = StyleSheet.create({
  animations: {
    width: 150,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});