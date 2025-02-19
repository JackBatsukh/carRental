import React from "react";
import { View, StyleSheet, StatusBar } from "react-native";
import Performance from "./performance";
import Description from "./description";
import Price from "./price";

const Main = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Performance />
      <Description />
      <Price />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    width: "100%",
    height: "75%",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    marginTop: 20,
    paddingTop: 20,
    paddingBottom: 20,
  },
});

export default Main;
