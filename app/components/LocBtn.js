import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import AppText from "./Text";

export default function LocBtn({pencentage, onPress}) {
  return (
    <View>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.btn}>
          <Text style={styles.percen}>{pencentage}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "#D9D9D9",
    width: 70,
    height: 30,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  percen: {
    fontSize: 12,
    fontWeight: "bold",
  }
});
