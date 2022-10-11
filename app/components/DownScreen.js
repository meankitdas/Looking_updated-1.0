import React from "react";
import { View, Text, StyleSheet, Dimensions, FlatList } from "react-native";
import BottomDrawer from "react-native-bottom-drawer-view";
import Item from "../components/Item";

import AppText from "./Text";

const TAB_BAR_HEIGHT = 49;

const users = [
  {
    id: 1,
    image: require("../assets/person-1.jpeg"),
    name: "Madam Alie",
    percentage: "50%",
  },
  {
    id: 2,
    image: require("../assets/person-2.jpeg"),
    name: "K James",
    percentage: "30%",
  },
  {
    id: 3,
    image: require("../assets/person-3.jpeg"),
    name: "Princess Loe",
    percentage: "20%",
  },
];

export default class DownScreen extends React.Component {
  renderContent = () => {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <AppText style={styles.text}>Suggestions</AppText>
        </View>
        <FlatList
          data={users}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Item
              image={item.image}
              name={item.name}
              percentage={item.percentage}
            />
          )}
        />
      </View>
    );
  };

  render() {
    return (
      <BottomDrawer containerHeight={350} offset={TAB_BAR_HEIGHT}>
        <View style={styles.curve}></View>
        {this.renderContent()}
      </BottomDrawer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#000"
  },
  curve: {
    backgroundColor: "#D3D3D3",
    height: 5,
    marginTop: 5,
    width: 65,
    alignSelf: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
  header: {
    padding: 10,
    alignItems: "center",
    
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  }
});
