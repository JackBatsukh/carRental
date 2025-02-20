import React from "react";
import { View, StyleSheet } from "react-native";
import Performance from "./performance";
import Description from "./description";

const Main = () => {
  return (
    <View style={styles.container}>
      <Performance />
      <Description />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff", 
    width: "100%",
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    paddingTop: 30,
    paddingBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -8 },
    shadowOpacity: 0.2,
    shadowRadius: 15,
    elevation: 10,
  },
});

export default Main;
