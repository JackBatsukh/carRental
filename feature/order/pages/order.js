import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import SvgBackArrow from "../../../shared/svg/back-light-svgrepo-com (1).svg";

const Order = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton}>
        <SvgBackArrow width={20} height={20} />
      </TouchableOpacity>
      <Text style={styles.text}>Order Page</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
export default Order;
