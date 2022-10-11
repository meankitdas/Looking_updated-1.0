import * as React from "react";
import MapView from "../components/MapView";
import { StyleSheet, Text, View, Dimensions, AsyncStorage } from "react-native";
import DownScreen from "../components/DownScreen";


export default function App() {
  React.useEffect(() => {
    isValid();
  },[])

  isValid = async() => {
    const value = await AsyncStorage.getItem('isValid');
    console.log(value);
  }

  return (
    <View style={styles.container}>
      <MapView />
      <DownScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    zIndex: 10,
  },
});
