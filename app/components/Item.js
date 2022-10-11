import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Screen from "./Screen";
import AppText from "./Text";
import LocBtn from "./LocBtn";
import auth from '@react-native-firebase/auth';

export default function Item({ image, name, percentage }) {
  const logout = () => {
    auth()
      .signOut()
      .then(() => console.log("User signed out!"));
  };
  return (
    <Screen>
      <View style={styles.container}>
        <View style={styles.dp_outline}>
          <Image source={image} style={styles.dp} />
        </View>
        <View style={styles.titles}>
          <AppText style={styles.name}>{name}</AppText>
          {/* <AppText style={styles.percentage}>50 %</AppText> */}
        </View>
        <View style={styles.btn}>
          <LocBtn pencentage={percentage} onPress={logout} />
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "#000",
    width: "100%",
    height: 100,
    flexDirection: "row",
    alignItems: "center",
    padding: 5,
  },
  dp_outline: {
    width: "20%",
    height: 80,
    backgroundColor: "#E3E3E3",
    borderRadius: 45,
    alignItems: "center",
    justifyContent: "center",
  },
  dp: {
    width: 70,
    height: 70,
    borderRadius: 100,
  },
  titles: {
    height: "100%",
    // backgroundColor: "blue",
    width: "60%",
    justifyContent: "center",
    padding: 10,
  },
  name: {
    color: "#000",
    fontSize: 15,
  },
  percentage: {
    color: "#000",
  },
  btn: {},
});
