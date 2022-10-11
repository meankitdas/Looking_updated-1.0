import * as React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import MapView, { Polygon } from "react-native-maps";

export default function App() {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 12.6407968,
          longitude: 77.4409178,
          latitudeDelta: 0.001,
          longitudeDelta: 0.001,
        }}
      >
      {/* <MapView> */}
        <Polygon
          coordinates={[
            { latitude: 12.641474, longitude: 77.436952 },
            { latitude: 12.643188, longitude: 77.438139 },
            { latitude: 12.642382, longitude: 77.441422 },
            { latitude: 12.641042, longitude: 77.442216 },
            { latitude: 12.640225, longitude: 77.442044 },
            { latitude: 12.639974, longitude: 77.442988 },
            { latitude: 12.640372, longitude: 77.443085 },
            { latitude: 12.641154, longitude: 77.443525},
            { latitude: 12.641196, longitude: 77.444823 },
            { latitude: 12.640547, longitude: 77.445939 },
            { latitude: 12.639238, longitude: 77.446057 },
            { latitude: 12.638034, longitude: 77.446057 },
            { latitude: 12.637291, longitude: 77.445757 },
            { latitude: 12.637406, longitude: 77.445467 },
            { latitude: 12.635155, longitude: 77.443965 },
            { latitude: 12.635071, longitude: 77.443268 },
            { latitude: 12.634202, longitude: 77.443129 },
            { latitude: 12.633919, longitude: 77.441423 },
            { latitude: 12.635615, longitude: 77.440350 },
            { latitude: 12.637133, longitude: 77.439642 },
            { latitude: 12.638211, longitude: 77.439456 },
            { latitude: 12.639195, longitude: 77.440186 },
            { latitude: 12.639656, longitude: 77.439832 },
            { latitude: 12.640431, longitude: 77.438416 },
            { latitude: 12.641220, longitude: 77.437024 },
          ]}
          strokeWidth={3} // The width of the outline of the shape
          strokeColor="#4099FF" // Color of the outline
        />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
