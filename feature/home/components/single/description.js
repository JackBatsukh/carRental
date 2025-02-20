import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Description = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Description</Text>
      <Text style={styles.text}>
        Experience luxury and power with the Toyota Land Cruiser 200. Perfect
        for both city drives and off-road adventures, this SUV combines
        cutting-edge technology with unparalleled comfort.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginVertical: 15,
  },
  title: {
    fontSize: 28,
    fontWeight: "800",
    color: "#000",
    marginBottom: 15,
  },
  text: {
    fontSize: 16,
    color: "#000",
    lineHeight: 26,
    fontWeight: "400",
  },
});

export default Description;
